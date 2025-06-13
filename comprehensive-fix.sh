#!/bin/bash

echo "🔧 Comprehensive TypeScript Module Fix"

# Kill any running dev server
echo "🛑 Stopping any running processes..."
pkill -f "vite"
sleep 2

# Clear all possible caches
echo "🧹 Clearing all caches..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf .vite
rm -rf dist
rm -rf node_modules/.tmp
rm -rf .tsbuildinfo

# Clear browser cache suggestion
echo "🌐 Please also clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)"

# Reinstall if needed
echo "📦 Checking node_modules..."
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "✅ Module structure has been reorganized:"
echo "   - Split types into modular files"
echo "   - Fixed barrel export issues"
echo "   - Updated all imports to use type-only imports"
echo "   - Cleared all caches"

echo ""
echo "🚀 Now run: npm run dev"
echo ""
echo "💡 If still getting errors:"
echo "   1. Close VS Code completely"
echo "   2. Reopen VS Code"
echo "   3. Press Ctrl/Cmd+Shift+P -> 'TypeScript: Restart TS Server'"