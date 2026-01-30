#!/bin/bash
set -e
echo "Verifying build..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build Successful!"
else
    echo "❌ Build Failed!"
    exit 1
fi
