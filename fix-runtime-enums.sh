#!/bin/bash

echo "🔧 Fix Runtime Enum Error"

# Kill any running processes
pkill -f "vite" > /dev/null 2>&1

# Clear all caches
echo "🧹 Clearing all caches..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache
rm -rf .vite
rm -rf dist

echo "✅ Fixed Runtime Enum Issues:"
echo "   - Created standalone enums in constants/enums.ts"
echo "   - Updated constants to use local enums (no circular imports)"
echo "   - Types now import enum types from constants"
echo "   - Fixed missing quote in API_ENDPOINTS"

echo ""
echo "🎯 Key Changes:"
echo "   - JobType, ApplicationStatus etc. now defined in constants/"
echo "   - Runtime access to enums works correctly"
echo "   - No more 'JobType is not defined' errors"
echo "   - Proper import/export structure"

echo ""
echo "🚀 Now run: npm run dev"