window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple intersection observer for reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('stat-item')) {
                // Potential for number animation here
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .stat-item, .contact-wrapper').forEach(el => {
    observer.observe(el);
});

console.log('ZAJEX Landing Page Loaded Successfully');
