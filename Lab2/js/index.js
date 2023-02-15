window.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.returner-button');
    window.addEventListener('scroll', function() {
        window.scrollY > 300 ? button.classList.add('active') : button.classList.remove('active');
    });
});