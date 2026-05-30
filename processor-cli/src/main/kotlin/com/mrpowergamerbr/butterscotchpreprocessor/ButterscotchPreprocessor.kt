package com.mrpowergamerbr.butterscotchpreprocessor

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.main
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.options.default
import com.github.ajalt.clikt.parameters.options.multiple
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.types.choice
import com.github.ajalt.clikt.parameters.types.int
import com.github.ajalt.clikt.parameters.types.path
import kotlinx.coroutines.runBlocking
import java.awt.Color
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.File
import java.nio.file.Path
import javax.imageio.ImageIO
import kotlin.io.path.createDirectories

class ButterscotchPreprocessor : CliktCommand(name = "butterscotch-preprocessor") {
    val dataWinPath by argument(help = "Path to the data.win file")
        .path(mustExist = true, canBeDir = false)

    val outputDir by option("-o", "--output", help = "Output directory for processed files")
        .path()
        .default(Path.of("output"))

    val debugOutputDir by option("--debug-output", help = "Directory for debug output (sprites, backgrounds, fonts, tiles, atlas debug images)")
        .path()

    val force4bppPatterns by option("--force-4bpp", help = "Force images whose names match this regex to be quantized to 4bpp (16 colors max). The regex must match the entire image name (example: spr_test.*). Can be passed multiple times.")
        .multiple()

    val atlasSize by option("--atlas-size", help = "Texture atlas size in pixels (square)")
        .int()
        .default(TextureAtlasPacker.DEFAULT_ATLAS_SIZE)

    val target by option("--target", help = "Output target platform")
        .choice("ps2", "ps3")
        .default("ps2")

    val elfPath by option("--elf", help = "PS2 ELF to place in the ISO as BOOT.ELF / SLUS_000.00")
        .path(mustExist = true, canBeDir = false)

    val isoPath by option("--iso", help = "Write a PS2 ISO containing the processed root game, optional chapter folders, videos, and ELF")
        .path()

    val chapterDirs by option("--chapter-dir", help = "Extra chapter folder to process and include, e.g. chapter1_windows. Can be passed multiple times.")
        .path(mustExist = true, canBeDir = true)
        .multiple()

    val includeRaw by option("--include-raw", help = "Extra raw file/folder to copy into the ISO. Can be passed multiple times.")
        .path(mustExist = true)
        .multiple()

    override fun run() {
        val dataWinFile = dataWinPath.toFile()
        echo("Parsing $dataWinPath...")

        val bytes = dataWinFile.readBytes()
        val dataWinDir = dataWinFile.parentFile ?: File(".")
        val outputDirFile = outputDir.toFile()
        outputDir.createDirectories()

        if (target == "ps3") {
            val result = runBlocking { processDataWinPS3(bytes) { echo(it) } }
            File(outputDirFile, "textures.bin").writeBytes(result.texturesBin)
            echo("\nWrote ${result.texturesBin.size} bytes to ${File(outputDirFile, "TEXTURES.BIN").path}")
            echo("Done!")
            return
        }

        // Debug dumps (JVM-only, using ImageIO)
        if (debugOutputDir != null) {
            val debugDir = debugOutputDir!!.toFile()
            debugDir.mkdirs()
            dumpDebugImages(bytes, debugDir)
        }

        // Load external audio files from the same directory as data.win
        val externalAudioFiles = loadExternalAudioFiles(dataWinDir)

        // Load audiogroup files (audiogroup%d.dat) from the same directory as data.win
        val audioGroupFiles = loadAudioGroupFiles(dataWinDir)

        // Load streamed music files (mus/ subdirectory or other subdirectories with OGG files)
        val musFiles = loadMusFiles(dataWinDir)

        // Core processing via common pipeline
        val result = runBlocking {
            processDataWin(
                bytes,
                externalAudioFiles,
                audioGroupFiles,
                musFiles,
                force4bppPatterns,
                atlasSize,
                audioDecoder = { parseWav(it) ?: parseOgg(it) }
            ) { echo(it) }
        }

        // Write output files
        File(outputDirFile, "CLUT4.BIN").writeBytes(result.clut4Bin)
        File(outputDirFile, "CLUT8.BIN").writeBytes(result.clut8Bin)
        File(outputDirFile, "TEXTURES.BIN").writeBytes(result.texturesBin)
        File(outputDirFile, "ATLAS.BIN").writeBytes(result.atlasBin)
        File(outputDirFile, "SOUNDBNK.BIN").writeBytes(result.soundBnkBin)
        File(outputDirFile, "SOUNDS.BIN").writeBytes(result.soundsBin)

        // Dump debug atlas images
        if (debugOutputDir != null) {
            val debugDir = debugOutputDir!!.toFile()
            val atlasDebugDir = File(debugDir, "atlas_debug")
            atlasDebugDir.mkdirs()
            for (atlas in result.atlases) {
                val debugImg = renderAtlasDebug(atlas)
                ImageIO.write(debugImg, "PNG", File(atlasDebugDir, "atlas_${atlas.id}_${atlas.bpp}bpp.png"))
            }
            echo("  Dumped ${result.atlases.size} debug atlas images to ${atlasDebugDir.path}")
        }

        if (isoPath != null) {
            if (elfPath == null) {
                throw IllegalArgumentException("--iso requires --elf so the ISO has a PS2 boot ELF")
            }
            buildPs2Iso(
                mainDataWin = dataWinFile,
                mainResult = result,
                elfFile = elfPath!!.toFile(),
                isoFile = isoPath!!.toFile(),
                outputDirFile = outputDirFile,
                chapterFolders = chapterDirs.map { it.toFile() },
                rawIncludes = includeRaw.map { it.toFile() }
            )
        }

        echo("\nAll files written to ${outputDirFile.path}")
        echo("Done!")
    }


    private fun buildPs2Iso(
        mainDataWin: File,
        mainResult: ProcessingResult,
        elfFile: File,
        isoFile: File,
        outputDirFile: File,
        chapterFolders: List<File>,
        rawIncludes: List<File>
    ) {
        val isoFiles = linkedMapOf<String, ByteArray>()

        fun putIso(path: String, data: ByteArray) {
            val clean = path.replace('\\', '/').trimStart('/')
            if (clean.isBlank()) return
            isoFiles[clean] = data
        }

        fun putFile(path: String, file: File) {
            if (!file.isFile) return
            putIso(path, file.readBytes())
        }

        fun putTree(prefix: String, dir: File) {
            if (!dir.exists()) return
            dir.walkTopDown().filter { it.isFile }.forEach { file ->
                val rel = file.relativeTo(dir).path.replace('\\', '/')
                putIso(if (prefix.isBlank()) rel else "$prefix/$rel", file.readBytes())
            }
        }

        fun putProcessed(prefix: String, dataWin: File, result: ProcessingResult) {
            val pfx = prefix.trim('/').replace('\\', '/')
            fun pp(name: String) = if (pfx.isBlank()) name else "$pfx/$name"
            putIso(pp("DATA.WIN"), dataWin.readBytes())
            putIso(pp("CLUT4.BIN"), result.clut4Bin)
            putIso(pp("CLUT8.BIN"), result.clut8Bin)
            putIso(pp("TEXTURES.BIN"), result.texturesBin)
            putIso(pp("ATLAS.BIN"), result.atlasBin)
            putIso(pp("SOUNDBNK.BIN"), result.soundBnkBin)
            putIso(pp("SOUNDS.BIN"), result.soundsBin)
        }

        val bootName = "SLUS_000.00"
        val systemCnf = "BOOT2 = cdrom0:\\$bootName;1\nVER = 1.00\nVMODE = NTSC\n"
        putIso("SYSTEM.CNF", systemCnf.encodeToByteArray())
        putIso(bootName, elfFile.readBytes())
        putIso("BOOT.ELF", elfFile.readBytes())

        putProcessed("", mainDataWin, mainResult)

        val baseDir = mainDataWin.parentFile ?: File(".")
        // Root/shared files used by DELTARUNE. mus/ stays at root; chapter SFX stay in chapters.
        listOf("mus", "dr.ini", "options.ini", "lang").forEach { name ->
            val f = File(baseDir, name)
            if (f.isDirectory) putTree(name, f) else putFile(name, f)
        }

        // Raw includes, useful for custom files that the runtime opens directly.
        for (raw in rawIncludes) {
            if (raw.isDirectory) putTree(raw.name, raw) else putFile(raw.name, raw)
        }

        for (chapter in chapterFolders) {
            val chapterDataWin = File(chapter, "data.win")
            if (!chapterDataWin.isFile) {
                println("Skipping chapter folder without data.win: ${chapter.path}")
                continue
            }
            println("Processing chapter for ISO: ${chapter.name}")
            val chapterBytes = chapterDataWin.readBytes()
            val chapterResult = runBlocking {
                processDataWin(
                    chapterBytes,
                    loadExternalAudioFiles(chapter),
                    loadAudioGroupFiles(chapter),
                    loadMusFiles(chapter),
                    force4bppPatterns,
                    atlasSize,
                    audioDecoder = { parseWav(it) ?: parseOgg(it) }
                ) { echo("  [${chapter.name}] $it") }
            }
            putProcessed(chapter.name, chapterDataWin, chapterResult)

            // Include external chapter assets that GameMaker opens by filename.
            chapter.listFiles()?.forEach { f ->
                val n = f.name.lowercase()
                when {
                    f.isDirectory && (n == "lang" || n == "vid" || n == "mus") -> putTree("${chapter.name}/${f.name}", f)
                    f.isFile && (n.endsWith(".ini") || n.endsWith(".ogg") || n.endsWith(".wav") || n.endsWith(".dat") || n.endsWith(".json") || n.endsWith(".mp4") || n.endsWith(".mpg")) -> putFile("${chapter.name}/${f.name}", f)
                }
            }
        }

        // Also include already-converted PS2 videos from chapter vid dirs using expected names.
        // Runtime maps vid/foo.mp4 -> vid/foo.ps2.mpg on PS2.
        val iso = Iso9660Creator(volumeId = "DELTARUNE", systemId = "PLAYSTATION")
            .create(isoFiles.map { Iso9660Creator.IsoFile(it.key, it.value) })
        isoFile.parentFile?.mkdirs()
        isoFile.writeBytes(iso)
        println("Wrote PS2 ISO ${isoFile.path} with ${isoFiles.size} files (${iso.size} bytes)")
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) = ButterscotchPreprocessor().main(args)
    }

    private fun dumpDebugImages(dataWinBytes: ByteArray, outputDir: File) {
        val dw = DataWin.parse(dataWinBytes, DataWinParserOptions(
            parseGen8 = true,
            parseOptn = false,
            parseLang = false,
            parseExtn = false,
            parseSond = true,
            parseAgrp = false,
            parseSprt = true,
            parseBgnd = true,
            parsePath = false,
            parseScpt = false,
            parseGlob = false,
            parseShdr = false,
            parseFont = true,
            parseTmln = false,
            parseObjt = false,
            parseRoom = true,
            parseTpag = true,
            parseCode = false,
            parseVari = false,
            parseFunc = false,
            parseStrg = true,
            parseTxtr = true,
            parseAudo = true,
            skipLoadingPreciseMasksForNonPreciseSprites = true
        ))

        val gm2022_5 = dw.isVersionAtLeast(2022, 5, 0, 0)
        val texturePages = dw.txtr.textures.map { tex ->
            val blob = tex.blobData ?: return@map null
            val img = runBlocking { decodeImageBytes(blob, gm2022_5) }
            val bi = BufferedImage(img.width, img.height, BufferedImage.TYPE_INT_ARGB)
            bi.setRGB(0, 0, img.width, img.height, img.pixels, 0, img.width)
            bi
        }

        dumpSprites(dw, texturePages, outputDir)
        dumpBackgrounds(dw, texturePages, outputDir)
        dumpFonts(dw, texturePages, outputDir)
        dumpTiles(dw, texturePages, outputDir)
    }

    private fun extractFromTPAG(tpag: TexturePageItem, texturePages: List<BufferedImage?>): BufferedImage {
        val w = maxOf(tpag.boundingWidth, 1)
        val h = maxOf(tpag.boundingHeight, 1)
        val img = BufferedImage(w, h, BufferedImage.TYPE_INT_ARGB)

        if (tpag.texturePageId < 0) return img
        val texPage = texturePages.getOrNull(tpag.texturePageId.toInt()) ?: return img
        if (tpag.targetWidth == 0 || tpag.targetHeight == 0) return img

        val g = img.createGraphics()
        g.drawImage(
            texPage,
            tpag.targetX, tpag.targetY,
            tpag.targetX + tpag.targetWidth, tpag.targetY + tpag.targetHeight,
            tpag.sourceX, tpag.sourceY,
            tpag.sourceX + tpag.sourceWidth, tpag.sourceY + tpag.sourceHeight,
            null
        )
        g.dispose()
        return img
    }

    private fun dumpSprites(dw: DataWin, texturePages: List<BufferedImage?>, outputDir: File) {
        val spritesDir = File(outputDir, "sprites")
        spritesDir.mkdirs()

        var count = 0
        for (sprite in dw.sprt.sprites) {
            val name = sprite.name ?: "sprite_$count"
            for ((frameIdx, texOffset) in sprite.textureOffsets.withIndex()) {
                val tpagIdx = dw.resolveTPAG(texOffset)
                if (0 > tpagIdx) continue
                val tpag = dw.tpag.items[tpagIdx]
                val img = extractFromTPAG(tpag, texturePages)

                val filename = if (sprite.textureOffsets.size > 1) "${name}_$frameIdx.png" else "$name.png"
                ImageIO.write(img, "PNG", File(spritesDir, filename))
            }
            count++
        }
        println("  Dumped $count sprites to ${spritesDir.path}")
    }

    private fun dumpBackgrounds(dw: DataWin, texturePages: List<BufferedImage?>, outputDir: File) {
        val bgDir = File(outputDir, "backgrounds")
        bgDir.mkdirs()

        var count = 0
        for (bg in dw.bgnd.backgrounds) {
            val name = bg.name ?: "bg_$count"
            val tpagIdx = dw.resolveTPAG(bg.textureOffset)
            if (0 > tpagIdx) { count++; continue }
            val tpag = dw.tpag.items[tpagIdx]
            val img = extractFromTPAG(tpag, texturePages)
            ImageIO.write(img, "PNG", File(bgDir, "$name.png"))
            count++
        }
        println("  Dumped $count backgrounds to ${bgDir.path}")
    }

    private fun dumpFonts(dw: DataWin, texturePages: List<BufferedImage?>, outputDir: File) {
        val fontDir = File(outputDir, "fonts")
        fontDir.mkdirs()

        var count = 0
        for (font in dw.font.fonts) {
            val name = font.name ?: "font_$count"
            val tpagIdx = dw.resolveTPAG(font.textureOffset)
            if (0 > tpagIdx) { count++; continue }
            val tpag = dw.tpag.items[tpagIdx]
            val img = extractFromTPAG(tpag, texturePages)
            ImageIO.write(img, "PNG", File(fontDir, "$name.png"))
            count++
        }
        println("  Dumped $count fonts to ${fontDir.path}")
    }

    private fun dumpTiles(dw: DataWin, texturePages: List<BufferedImage?>, outputDir: File) {
        val tilesDir = File(outputDir, "tiles")
        tilesDir.mkdirs()

        data class TileKey(val bgDef: Int, val srcX: Int, val srcY: Int, val w: Int, val h: Int)
        val uniqueTiles = LinkedHashMap<TileKey, RoomTile>()
        for (room in dw.room.rooms) {
            for (tile in room.tiles) {
                if (0 > tile.backgroundDefinition || tile.backgroundDefinition >= dw.bgnd.backgrounds.size) continue
                val key = TileKey(tile.backgroundDefinition, tile.sourceX, tile.sourceY, tile.width, tile.height)
                uniqueTiles.putIfAbsent(key, tile)
            }
        }

        val bgImages = HashMap<Int, BufferedImage>()
        for ((key, _) in uniqueTiles) {
            if (bgImages.containsKey(key.bgDef)) continue
            val bg = dw.bgnd.backgrounds[key.bgDef]
            val tpagIdx = dw.resolveTPAG(bg.textureOffset)
            if (0 > tpagIdx) continue
            bgImages[key.bgDef] = extractFromTPAG(dw.tpag.items[tpagIdx], texturePages)
        }

        var count = 0
        for ((key, _) in uniqueTiles) {
            val bgImg = bgImages[key.bgDef] ?: continue
            if (key.srcX + key.w > bgImg.width || key.srcY + key.h > bgImg.height) continue
            if (key.w == 0 || key.h == 0) continue

            val tileImg = bgImg.getSubimage(key.srcX, key.srcY, key.w, key.h)
            val outImg = BufferedImage(key.w, key.h, BufferedImage.TYPE_INT_ARGB)
            val g = outImg.createGraphics()
            g.drawImage(tileImg, 0, 0, null)
            g.dispose()

            val bgName = dw.bgnd.backgrounds[key.bgDef].name ?: "bg${key.bgDef}"
            ImageIO.write(outImg, "PNG", File(tilesDir, "${bgName}_${key.srcX}_${key.srcY}_${key.w}x${key.h}.png"))
            count++
        }
        println("  Dumped $count unique tiles to ${tilesDir.path}")
    }

    // Scan a directory for audiogroup%d.dat files and load them into a map keyed by group ID
    // Audiogroup 0 is embedded in data.win, so we skip it
    private fun loadAudioGroupFiles(dir: File): Map<Int, ByteArray> {
        val result = HashMap<Int, ByteArray>()
        val files = dir.listFiles() ?: return result
        val pattern = Regex("""audiogroup(\d+)\.dat""", RegexOption.IGNORE_CASE)
        for (file in files) {
            val match = pattern.matchEntire(file.name) ?: continue
            val groupId = match.groupValues[1].toInt()
            if (groupId == 0) continue // audiogroup 0 is in data.win
            result[groupId] = file.readBytes()
        }
        if (result.isNotEmpty()) {
            println("Found ${result.size} audiogroup files in ${dir.path}: ${result.keys.sorted().joinToString { "audiogroup$it.dat" }}")
        }
        return result
    }

    // Scan a directory for audio files (OGG, WAV) and load them into a map keyed by filename
    private fun loadExternalAudioFiles(dir: File): Map<String, ByteArray> {
        val result = HashMap<String, ByteArray>()
        val files = dir.listFiles() ?: return result
        for (file in files) {
            val name = file.name.lowercase()
            if (name.endsWith(".ogg") || name.endsWith(".wav")) {
                result[file.name] = file.readBytes()
            }
        }
        if (result.isNotEmpty()) {
            println("Found ${result.size} external audio files in ${dir.path}")
        }
        return result
    }

    // Scan for subdirectories containing OGG files (e.g. mus/) and load them keyed by relative path
    private fun loadMusFiles(dir: File): Map<String, ByteArray> {
        val result = HashMap<String, ByteArray>()
        val subdirs = dir.listFiles { f -> f.isDirectory } ?: return result
        for (subdir in subdirs) {
            val oggFiles = subdir.walkTopDown().filter { it.isFile && it.name.lowercase().endsWith(".ogg") }
            for (file in oggFiles) {
                val relativePath = file.relativeTo(dir).path
                result[relativePath] = file.readBytes()
            }
        }
        if (result.isNotEmpty()) {
            println("Found ${result.size} streamed music files in subdirectories of ${dir.path}")
        }
        return result
    }

    // Render an atlas to a BufferedImage for debugging/verification
    fun renderAtlas(atlas: TextureAtlas): BufferedImage {
        val img = BufferedImage(atlas.width, atlas.height, BufferedImage.TYPE_INT_ARGB)
        for (entry in atlas.entries) {
            val rendered = ClutProcessor.renderClutImage(entry.image)
            val pixels = rendered.pixels
            img.setRGB(entry.x, entry.y, rendered.width, rendered.height, pixels, 0, rendered.width)
        }
        return img
    }

    // Render an atlas with colored outlines around each entry for debugging
    fun renderAtlasDebug(atlas: TextureAtlas): BufferedImage {
        val img = renderAtlas(atlas)
        val g = img.createGraphics()

        val colors = arrayOf(Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW, Color.CYAN, Color.MAGENTA, Color.ORANGE)
        for ((i, entry) in atlas.entries.withIndex()) {
            g.color = colors[i % colors.size]
            g.drawRect(entry.x, entry.y, entry.image.width - 1, entry.image.height - 1)
        }

        g.dispose()
        return img
    }
}
