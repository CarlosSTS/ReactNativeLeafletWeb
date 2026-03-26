#!/bin/sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LIB_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

SRC="$LIB_ROOT/android/app/src/main/assets/leaflet.html"
DEST_DIR="public"
DEST="$DEST_DIR/leaflet.html"

mkdir -p "$DEST_DIR"

if [ -f "$SRC" ]; then
  cp "$SRC" "$DEST"
  echo "✅ leaflet.html copied to $DEST_DIR/"
else
  echo "❌ leaflet.html not found at $SRC"
  exit 1
fi
