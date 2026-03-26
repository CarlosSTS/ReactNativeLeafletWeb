#!/bin/sh

SRC="android/app/src/main/assets/leaflet.html"
DEST_DIR="public"
DEST="$DEST_DIR/leaflet.html"

mkdir -p "$DEST_DIR"

if [ -f "$SRC" ]; then
  cp "$SRC" "$DEST"
  echo "leaflet.html copied to $DEST_DIR/"
else
  echo "File leaflet.html not found in $SRC."
fi
