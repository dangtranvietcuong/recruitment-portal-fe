#!/bin/bash

echo "🔧 Fixing TypeScript module import issues..."

# Clear all caches
echo "🧹 Clearing caches..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf .vite
rm -rf dist

# Clear TypeScript cache
rm -rf node_modules/.tmp

echo "✅ Fixed TypeScript imports with 'type' keyword"
echo "✅ Cleared all caches"

echo ""
echo "🚀 Now run: npm run dev"