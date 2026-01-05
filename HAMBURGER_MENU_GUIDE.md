# Hướng Dẫn Tạo Hamburger Menu / Mobile Menu

Tài liệu này hướng dẫn cách tạo một hamburger menu responsive cho website, sử dụng HTML, CSS và JavaScript.

## 📋 Mục Lục

1. [Tổng Quan](#tổng-quan)
2. [Cấu Trúc HTML](#cấu-trúc-html)
3. [Styling với CSS](#styling-với-css)
4. [JavaScript Functionality](#javascript-functionality)
5. [Hoàn Chỉnh Code](#hoàn-chỉnh-code)
6. [Tùy Chỉnh](#tùy-chỉnh)

---

## 📖 Tổng Quan

Hamburger menu là một menu điều hướng dạng icon 3 đường kẻ ngang (☰), thường được sử dụng trên mobile để tiết kiệm không gian. Khi click vào, menu sẽ hiển thị/ẩn các mục điều hướng.

### Các thành phần chính:
- **Hamburger Icon**: Button với 3 đường kẻ ngang
- **Mobile Menu**: Container chứa các menu items
- **Toggle Function**: JavaScript để bật/tắt menu

---

## 🏗️ Cấu Trúc HTML

### Bước 1: Tạo Navigation Container

```html
<nav id="navigation">
  <!-- Hamburger button và menu sẽ được đặt ở đây -->
</nav>
```

### Bước 2: Thêm Hamburger Button

Sử dụng thư viện [hamburgers.css](https://github.com/jonsuh/hamburgers) hoặc tự tạo:

```html
<button class="hamburger hamburger--collapse" type="button"
        aria-label="Menu" 
        aria-controls="mobile-menu" 
        aria-expanded="false">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>
```

**Giải thích:**
- `hamburger--collapse`: Style animation (có thể thay bằng `hamburger--spin`, `hamburger--squeeze`, etc.)
- `aria-label`: Mô tả cho screen readers
- `aria-expanded`: Trạng thái menu (false = đóng, true = mở)

### Bước 3: Tạo Mobile Menu Container

```html
<div class="mobile-menu">
  <ul>
    <li><a href="#" class="menu-item">Home</a></li>
    <li><a href="#" class="menu-item">Features</a></li>
    <li><a href="#" class="menu-item">Pricing</a></li>
    <li><a href="#" class="menu-item">FAQs</a></li>
    <li><a href="#" class="menu-item">About</a></li>
  </ul>
</div>
```

### HTML Hoàn Chỉnh:

```html
<div class="container">
  <nav id="navigation">
    <!-- Hamburger Button -->
    <button class="hamburger hamburger--collapse" type="button"
            aria-label="Menu" 
            aria-controls="mobile-menu" 
            aria-expanded="false">
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu">
      <ul>
        <li><a href="#" class="menu-item">Home</a></li>
        <li><a href="#" class="menu-item">Features</a></li>
        <li><a href="#" class="menu-item">Pricing</a></li>
        <li><a href="#" class="menu-item">FAQs</a></li>
        <li><a href="#" class="menu-item">About</a></li>
      </ul>
    </div>
  </nav>
</div>
```

---

## 🎨 Styling với CSS

### Bước 1: Import Hamburger CSS (nếu dùng thư viện)

```html
<link href="dist/hamburgers.css" rel="stylesheet">
```

Hoặc từ CDN:
```html
<link href="https://cdn.jsdelivr.net/npm/hamburgers@1.2.1/dist/hamburgers.min.css" rel="stylesheet">
```

### Bước 2: Style Navigation Container

```css
#navigation {
  position: relative; /* Quan trọng: để menu absolute positioning hoạt động */
}
```

### Bước 3: Style Hamburger Button

```css
.hamburger {
  position: fixed; /* Hoặc absolute tùy layout */
  top: 20px;
  right: 20px;
  z-index: 1000; /* Đảm bảo button luôn ở trên cùng */
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

/* Khi menu mở, thêm class is-active */
.hamburger.is-active .hamburger-inner {
  /* Animation sẽ tự động được xử lý bởi hamburgers.css */
}
```

### Bước 4: Style Mobile Menu

```css
.mobile-menu {
  display: none; /* Ẩn mặc định */
  position: absolute; /* Hoặc fixed tùy yêu cầu */
  top: 100%; /* Hiển thị ngay dưới navigation */
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 999;
}

/* Khi menu được hiển thị */
.mobile-menu.show {
  display: block;
}

/* Style cho menu list */
.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu ul li {
  margin-bottom: 10px;
  border-bottom: 1px solid #eee; /* Optional: thêm border */
}

.mobile-menu ul li:last-child {
  border-bottom: none;
}

/* Style cho menu links */
.mobile-menu ul li a {
  text-decoration: none;
  color: var(--dark-color);
  font-size: 16px;
  font-weight: bold;
  display: block;
  padding: 10px 0;
  transition: color 0.3s ease;
}

.mobile-menu ul li a:hover {
  color: var(--primary-color);
}
```

### Bước 5: Responsive Design (Optional)

```css
/* Chỉ hiển thị hamburger menu trên mobile */
@media (min-width: 769px) {
  .hamburger {
    display: none; /* Ẩn hamburger trên desktop */
  }
  
  .mobile-menu {
    display: none !important; /* Luôn ẩn trên desktop */
  }
}

/* Chỉ hiển thị trên mobile */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  
  /* Menu full screen trên mobile */
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 999;
    transform: translateX(-100%); /* Ẩn menu bên trái */
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    padding-top: 80px;
  }
  
  .mobile-menu.show {
    transform: translateX(0); /* Hiển thị menu */
  }
}
```

---

## ⚙️ JavaScript Functionality

### Cách 1: Vanilla JavaScript (Đơn giản)

```javascript
// Toggle menu function
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle class 'show' cho menu
    menu.classList.toggle('show');
    
    // Toggle class 'is-active' cho hamburger (animation)
    hamburger.classList.toggle('is-active');
    
    // Update aria-expanded attribute
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Event listener cho hamburger button
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
```

### Cách 2: Với Error Handling (Khuyến nghị)

```javascript
// Menu mobile
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    // Kiểm tra element có tồn tại không
    if (!menu || !hamburger) {
        console.error('Menu or hamburger button not found!');
        return;
    }
    
    // Toggle classes
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-active');
    
    // Update aria-expanded
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Đợi DOM load xong
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});
```

### Cách 3: Đóng menu khi click vào link

```javascript
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu || !hamburger) return;
    
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-active');
    
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Đóng menu khi click vào menu item
function closeMenuOnLinkClick() {
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            hamburger.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        closeMenuOnLinkClick();
    }
});
```

### Cách 4: Đóng menu khi click bên ngoài

```javascript
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu || !hamburger) return;
    
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-active');
    
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Đóng menu khi click bên ngoài
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu || !hamburger) return;
    
    // Kiểm tra click có nằm ngoài menu và hamburger không
    if (menu.classList.contains('show') && 
        !menu.contains(event.target) && 
        !hamburger.contains(event.target)) {
        menu.classList.remove('show');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});
```

---

## 📝 Hoàn Chỉnh Code

### HTML (index.html)

```html
<nav id="navigation">
  <button class="hamburger hamburger--collapse" type="button"
          aria-label="Menu" 
          aria-controls="mobile-menu" 
          aria-expanded="false">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  
  <div class="mobile-menu">
    <ul>
      <li><a href="#" class="menu-item">Home</a></li>
      <li><a href="#" class="menu-item">Features</a></li>
      <li><a href="#" class="menu-item">Pricing</a></li>
      <li><a href="#" class="menu-item">FAQs</a></li>
      <li><a href="#" class="menu-item">About</a></li>
    </ul>
  </div>
</nav>
```

### CSS (styles.css)

```css
#navigation {
  position: relative;
}

.hamburger {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 999;
}

.mobile-menu.show {
  display: block;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu ul li {
  margin-bottom: 10px;
}

.mobile-menu ul li a {
  text-decoration: none;
  color: var(--dark-color);
  font-size: 16px;
  font-weight: bold;
  display: block;
  padding: 10px 0;
  transition: color 0.3s ease;
}

.mobile-menu ul li a:hover {
  color: var(--primary-color);
}

/* Responsive */
@media (max-width: 768px) {
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .mobile-menu.show {
    transform: translateX(0);
  }
}
```

### JavaScript (main.js)

```javascript
// Menu mobile
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!menu || !hamburger) return;
    
    menu.classList.toggle('show');
    hamburger.classList.toggle('is-active');
    
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Initialize khi DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});
```

---

## 🎨 Tùy Chỉnh

### 1. Thay đổi Animation Style

Thay `hamburger--collapse` bằng các style khác:
- `hamburger--spin`
- `hamburger--squeeze`
- `hamburger--arrow`
- `hamburger--arrowalt`
- `hamburger--elastic`

### 2. Thay đổi Vị Trí Menu

```css
/* Menu từ bên phải */
.mobile-menu {
  right: 0;
  left: auto;
  transform: translateX(100%);
}

.mobile-menu.show {
  transform: translateX(0);
}
```

### 3. Thêm Overlay Background

```css
.mobile-menu::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-menu.show::before {
  opacity: 1;
}
```

### 4. Thêm Animation Fade In

```css
.mobile-menu {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.mobile-menu.show {
  opacity: 1;
  visibility: visible;
}
```

### 5. Menu với Icons

```html
<div class="mobile-menu">
  <ul>
    <li>
      <a href="#" class="menu-item">
        <i class="fas fa-home"></i> Home
      </a>
    </li>
    <li>
      <a href="#" class="menu-item">
        <i class="fas fa-star"></i> Features
      </a>
    </li>
  </ul>
</div>
```

---

## ✅ Checklist

- [ ] HTML structure đã đúng
- [ ] CSS styles đã được áp dụng
- [ ] JavaScript toggle function hoạt động
- [ ] Hamburger animation hoạt động
- [ ] Menu hiển thị/ẩn đúng
- [ ] Responsive trên mobile
- [ ] Accessibility (aria-expanded) đã được set
- [ ] Test trên các trình duyệt khác nhau

---

## 🐛 Troubleshooting

### Menu không hiển thị
- Kiểm tra class `show` có được thêm vào không
- Kiểm tra CSS `display: block` hoặc `transform`
- Kiểm tra z-index có đủ cao không

### Hamburger không animate
- Kiểm tra đã import `hamburgers.css` chưa
- Kiểm tra class `is-active` có được thêm vào không

### Menu không đóng khi click link
- Thêm event listener cho menu links
- Hoặc thêm click outside handler

---

## 📚 Tài Liệu Tham Khảo

- [Hamburgers CSS Library](https://github.com/jonsuh/hamburgers)
- [MDN: ARIA Attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)

---

**Chúc bạn thành công! 🎉**

