# DELTARUNE PS2 ISO build notes

If the preprocessor crashes with `java.lang.OutOfMemoryError: Java heap space` while processing chapter texture pages, run the ISO script normally. It now sets:

```bash
JAVA_TOOL_OPTIONS="-Xmx8g -XX:+UseG1GC -Djava.awt.headless=true"
GRADLE_OPTS="-Xmx2g -Dorg.gradle.daemon=false"
```

Override it if your machine has less RAM:

```bash
JAVA_TOOL_OPTIONS="-Xmx4g -XX:+UseG1GC -Djava.awt.headless=true" \
./scripts/make_deltarune_ps2_iso.sh ~/UTDR/Deltarune ./butterscotch.elf ./DELTARUNE_PS2.iso
```

Recommended:

```bash
./scripts/make_deltarune_ps2_iso.sh ~/UTDR/Deltarune ./butterscotch.elf ./DELTARUNE_PS2.iso
```

The ISO script includes:
- root `data.win` processed output
- root `mus/`
- `chapter*_windows` processed output and loose chapter assets
- `vid/*.mp4` plus converted `vid/*.ps2.mpg` when ffmpeg exists
- `SYSTEM.CNF`, `SLUS_000.00`, and `BOOT.ELF`
