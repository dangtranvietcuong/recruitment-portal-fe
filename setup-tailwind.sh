#!/bin/bash

# Script để setup TailwindCSS từ đầu nếu cần

echo "🎨 Setting up TailwindCSS..."

# Cài đặt TailwindCSS packages
npm install -D tailwindcss @tailwindcss/postcss autoprefixer

# Generate tailwind config nếu chưa có
if [ ! -f "tailwind.config.js" ]; then
    echo "📝 Generating tailwind.config.js..."
    npx tailwindcss init -p
fi

echo "✅ TailwindCSS setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Check tailwind.config.js content paths"
echo "2. Add @tailwind directives to your CSS"
echo "3. Update postcss.config.js if needed"