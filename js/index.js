window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;

    const heroText = document.querySelector('.giant-text');
    if(heroText) {
        heroText.style.transform = `translateY(${scrollValue * 0.5}px)`;
    }

    // Efek putar pada strip Marquee saat scroll
    const marquee = document.querySelector('.marquee-strip');
    if(marquee) {
        // Rotasi berubah sedikit saat scroll
        marquee.style.transform = `rotate(${-2 + scrollValue * 0.005}deg)`;
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     // --- LOGIC NAVBAR MOBILE ---
//     const menuBtn = document.getElementById('mobile-menu-btn');
//     const mobileNav = document.getElementById('mobile-nav');
//     const closeMenu = document.querySelector('.close-menu');
//     const mobileLinks = document.querySelectorAll('.mobile-links a');

//     // Buka Menu
//     if(menuBtn) {
//         menuBtn.addEventListener('click', () => {
//             mobileNav.classList.add('active');
//         });
//     }

//     // Tutup Menu (Tombol X)
//     if(closeMenu) {
//         closeMenu.addEventListener('click', () => {
//             mobileNav.classList.remove('active');
//         });
//     }

//     // Tutup Menu saat salah satu link diklik
//     mobileLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             mobileNav.classList.remove('active');
//         });
//     });
// });
