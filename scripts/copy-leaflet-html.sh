#!/bin/sh

SRC="android/app/src/main/assets/leaflet.html"
DEST="public/leaflet.html"

if [ -f "$SRC" ]; then
  cp "$SRC" "$DEST"
  echo "leaflet.html copied to public/"
else
  echo "File leaflet.html not found in $SRC."
fi
