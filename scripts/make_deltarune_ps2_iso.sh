#!/usr/bin/env bash
set -euo pipefail
if [ "$#" -lt 3 ]; then
  echo "Usage: $0 /path/to/Deltarune /path/to/butterscotch.elf /path/to/output.iso" >&2
  exit 2
fi
GAME_DIR="$1"
ELF="$2"
ISO="$3"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

# The DELTARUNE chapter texture pages are large. The JVM default heap is too small
# and crashes while decoding PNG TXTR pages. Allow override from the shell, but use
# a large safe default for local machines/GitHub Actions.
export JAVA_TOOL_OPTIONS="${JAVA_TOOL_OPTIONS:--Xmx8g -XX:+UseG1GC -Djava.awt.headless=true}"
export GRADLE_OPTS="${GRADLE_OPTS:--Xmx2g -Dorg.gradle.daemon=false}"

CHAPTER_ARGS=()
for ch in "$GAME_DIR"/chapter*_windows; do
  [ -d "$ch" ] && [ -f "$ch/data.win" ] && CHAPTER_ARGS+=(--chapter-dir "$ch")
done

processor-clibuild/bin/processor-cli \
--target ps2 \
--elf ./butterscotch.elf \
--iso DR.iso \
-o '_ps2_processed' \
${CHAPTER_ARGS[*]} \
'/home/nate/UTDR/Deltarune/data.win'
