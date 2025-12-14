/* ---------------------------------------------------------------- */
/* 1. SCROLL REVEAL ANIMATION                                       */
/* ---------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.reveal');

    // Configuration for the Intersection Observer
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
                // Adjust for sticky header height
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