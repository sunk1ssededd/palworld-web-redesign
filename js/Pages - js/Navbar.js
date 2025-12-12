document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const menuOverlay = document.getElementById('mobileMenuOverlay');
    const closeBtn = document.querySelector('.close-menu');
    const menuLinks = document.querySelectorAll('.mobile-links-list a');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuOverlay.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
        });
    });
});
