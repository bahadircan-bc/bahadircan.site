#!/usr/bin/env bash
# Render cv/cv.html → public/cv_bahadircan.pdf using headless Chrome.
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$DIR/public/cv_bahadircan.pdf" \
  "file://$DIR/cv/cv.html"

echo "Wrote $DIR/public/cv_bahadircan.pdf"
