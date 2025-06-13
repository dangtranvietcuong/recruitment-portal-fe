# 🔧 Fix PostCSS TailwindCSS Error

## 🚨 Lỗi hiện tại:
```
[postcss] It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin
```

## ✅ Giải pháp (chọn 1 trong các cách sau):

### **Cách 1: Cài đặt @tailwindcss/postcss**
```bash
# Cài đặt package mới
npm install -D @tailwindcss/postcss autoprefixer

# PostCSS config đã được update tự động
```

### **Cách 2: Nếu cách 1 không work**
```bash
# Uninstall tailwindcss cũ
npm uninstall tailwindcss

# Cài đặt lại với package mới
npm install -D tailwindcss @tailwindcss/postcss autoprefixer

# Tạo lại config
npx tailwindcss init -p
```

### **Cách 3: Alternative approach**
```bash
# Nếu vẫn lỗi, rename file postcss config
mv postcss.config.js postcss.config.js.backup
mv postcss.config.alternative.js postcss.config.js
```

### **Cách 4: Sử dụng CSS thuần**
```bash
# Nếu tất cả cách trên đều lỗi
mv src/index.css src/index.css.backup
mv src/index.alternative.css src/index.css
```

## 🔍 Debug Steps:

### 1. Kiểm tra phiên bản packages:
```bash
npm list tailwindcss
npm list @tailwindcss/postcss
npm list autoprefixer
```

### 2. Xóa node_modules và reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. Clear Vite cache:
```bash
rm -rf .vite
rm -rf dist
npm run dev
```

## 📋 Các file đã được tạo/cập nhật:

1. ✅ `postcss.config.js` - Updated config cho @tailwindcss/postcss
2. ✅ `postcss.config.alternative.js` - Backup alternative config  
3. ✅ `src/index.alternative.css` - CSS thuần không dùng Tailwind
4. ✅ `setup-tailwind.sh` - Script setup tự động
5. ✅ `INSTALL_MISSING_DEPS.md` - Updated dependencies

## 🎯 Expected Result:

Sau khi chạy 1 trong các cách trên, bạn sẽ thấy:
- ✅ No PostCSS errors
- ✅ TailwindCSS classes hoạt động
- ✅ Dark mode switching works
- ✅ Dev server starts successfully

## 🆘 Nếu vẫn lỗi:

1. Check Node.js version (cần >= 16)
2. Check npm/yarn version  
3. Try using yarn instead of npm
4. Report exact error message

Chọn cách nào phù hợp và chạy lệnh tương ứng! 🚀