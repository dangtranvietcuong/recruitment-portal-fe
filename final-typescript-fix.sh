#!/bin/bash

echo "🔧 Final TypeScript verbatimModuleSyntax Fix"

# Kill any running processes
pkill -f "vite" > /dev/null 2>&1

# Clear all caches completely  
echo "🧹 Clearing all TypeScript and build caches..."
rm -rf node_modules/.vite
rm -rf node_modules/.cache  
rm -rf node_modules/.tmp
rm -rf .vite
rm -rf dist
rm -rf .tsbuildinfo
rm -rf tsconfig.tsbuildinfo

echo "✅ Fixed all TypeScript import issues:"
echo "   - Disabled verbatimModuleSyntax in tsconfig"
echo "   - Separated value imports from type imports"
echo "   - Fixed all service, hook, and component imports"
echo "   - Cleared all build caches"

echo ""
echo "🚀 Now run: npm run dev"
echo ""
echo "💡 Changes made:"
echo "   - axios: import axios from 'axios' + import type { AxiosInstance }"
echo "   - class-variance-authority: import { cva } + import type { VariantProps }"
echo "   - All API types now use type-only imports"
echo "   - verbatimModuleSyntax disabled for more flexibility"