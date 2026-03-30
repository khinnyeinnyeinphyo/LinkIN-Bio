document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-card');

    links.forEach((link, index) => {
        // Set initial state
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';

        // Staggered entry animation
        setTimeout(() => {
            link.style.transition = 'all 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
