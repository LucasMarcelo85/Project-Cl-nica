// script.js
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 900) { // Ajuste o valor conforme necessário
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
