// Menu mobile - Toggle function
function toggleMenu() {
    const menu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    let gsapTimeline = gsap.timeline();
    // gsapTimeline.to(menu, {
    //     transform: 'translateX(0)',
    //     duration: 0.3,
    //     ease: 'power2.inOut',
    // });
    // Kiểm tra element có tồn tại không
    if (!menu || !hamburger) {
        console.error('Menu or hamburger button not found!');
        return;
    }
    
    // Toggle class 'show' cho menu
    menu.classList.toggle('show');
    
    // Toggle class 'is-active' cho hamburger (animation)
    hamburger.classList.toggle('is-active');

    
    // Update aria-expanded attribute cho accessibility
    const isExpanded = hamburger.classList.contains('is-active');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Đóng menu khi click vào menu item
function closeMenuOnLinkClick() {
    const menuLinks = document.querySelectorAll('.mobile-menu a');
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
    
    if (!menuLinks.length || !hamburger || !menu) return;
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('show');
            hamburger.classList.remove('is-active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

// Initialize menu khi DOM ready
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
        closeMenuOnLinkClick();
    }
});

// Set background image từ img cho service cards
function setCardBackgrounds() {
    const cards = document.querySelectorAll('.services-section .services-content .card');
    cards.forEach(card => {
        const img = card.querySelector('img');
        if (img && img.src) {
            card.style.backgroundImage = `url(${img.src})`;
        }
    });
}

// Set background image từ img cho news cards
function setNewsCardBackgrounds() {
    const cards = document.querySelectorAll('.news-section .news-content .card');
    cards.forEach(card => {
        const img = card.querySelector('img');
        if (img && img.src) {
            card.style.backgroundImage = `url(${img.src})`;
        }
    });
}

// Đợi preloader xong rồi mới chạy
window.addEventListener('preloaderComplete', function() {
    new WOW().init();
    
    // Set background cho service cards
    setCardBackgrounds();
    
    // Set background cho news cards
    setNewsCardBackgrounds();
    
    let tl = gsap.timeline({
        paused: true,
    });
    const header = document.querySelector("#header-section");
    if (!header) return;
    const heroCarousel = document.querySelector("#hero-carousel");
    if (!heroCarousel) return;
    gsap.set(header, { y: -header.offsetHeight });
    heroCarousel.classList.remove('w-100', 'h-100');
    gsap.set(heroCarousel, { 
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "20%",
        height: "20%",
    });
    tl.to(header, {
        y: "0%",
        duration: 1.5,
        ease: "power2.inOut",
    });
    tl.to(heroCarousel, {
        top: "0%",
        left: "0%",
        transform: "translate(0%, 0%)",
        width: "100%",
        height: "100%",
        duration: 1.5,
        ease: "power2.inOut",
    }, "<");
    setTimeout(() => {
        tl.play();
    }, 1800);
});