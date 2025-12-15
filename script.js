/* ---------------------------------------------------------------- */
/* 1. SCROLL REVEAL ANIMATION                                       */
/* ---------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.reveal');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile Menu Logic
    initMobileMenu();
});

/* ---------------------------------------------------------------- */
/* 2. SMOOTH SCROLLING                                              */
/* ---------------------------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').length > 1) { 
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const topPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: topPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

/* ---------------------------------------------------------------- */
/* 3. MOBILE MENU TOGGLE                                            */
/* ---------------------------------------------------------------- */

function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileClose = document.querySelector('.mobile-close');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

    if (!mobileToggle || !mobileOverlay) return;

    // Open Menu
    mobileToggle.addEventListener('click', () => {
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close Menu Function
    const closeMenu = () => {
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    };

    // Close on X button click
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }

    // Close when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
