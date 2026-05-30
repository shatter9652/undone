#!/usr/bin/env bash
set -euo pipefail
ROOT="${1:-.}"
FPS="${FPS:-30}"
SIZE="${SIZE:-320:240}"
BITRATE="${BITRATE:-900k}"
find "$ROOT" -type f \( -iname '*.mp4' -o -iname '*.mov' -o -iname '*.webm' \) | while read -r in; do
  out="${in%.*}.ps2.mpg"
  echo "[video] $in -> $out"
  ffmpeg -y -i "$in" -vf "scale=${SIZE},fps=${FPS}" -an -c:v mpeg1video -b:v "$BITRATE" "$out"
done
