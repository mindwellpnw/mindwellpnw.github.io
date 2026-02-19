
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileNav.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Smooth scroll is handled by CSS (scroll-behavior: smooth)
