# DELTARUNE PS2 ISO packaging

This patched CLI can build a PS2 ISO that contains:

- `SYSTEM.CNF`
- `SLUS_000.00` / `BOOT.ELF`
- root `data.win` processed files
- `mus/` root music
- each `chapterX_windows/` folder with its own processed `data.win` outputs
- chapter-local loose sound effects, `lang/`, `options.ini`, `audiogroup*.dat`
- `vid/*.mp4` plus converted `vid/*.ps2.mpg` files for PS2 video playback

## One-command packaging

```bash
./scripts/make_deltarune_ps2_iso.sh ~/UTDR/Deltarune ./butterscotch.elf ./DELTARUNE_PS2.iso
```

## Manual command

```bash
./scripts/convert_ps2_videos.sh ~/UTDR/Deltarune
./gradlew :processor-cli:run --args "~/UTDR/Deltarune/data.win \
  --target ps2 \
  --elf ./butterscotch.elf \
  --iso ./DELTARUNE_PS2.iso \
  --chapter-dir ~/UTDR/Deltarune/chapter1_windows \
  --chapter-dir ~/UTDR/Deltarune/chapter2_windows \
  --chapter-dir ~/UTDR/Deltarune/chapter3_windows \
  --chapter-dir ~/UTDR/Deltarune/chapter4_windows \
  -o ./ps2_processed"
```

The PS2 runtime should map `vid/name.mp4` to `vid/name.ps2.mpg` internally.
