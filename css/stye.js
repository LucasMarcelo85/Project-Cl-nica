// Script para abrir e fechar o menu modal
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuModal = document.querySelector('.menu-mobile');

    // Abre o menu ao clicar no botão
    menuToggle.addEventListener('click', function () {
        menuModal.classList.toggle('active');
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (!menuModal.contains(event.target) && !menuToggle.contains(event.target)) {
            menuModal.classList.remove('active');
        }
    });
});


// Script para subir ao topo da página
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    // Mostrar o botão ao rolar para baixo
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Mostrar o botão após 200px de rolagem
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Subir ao topo da página ao clicar no botão
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    });
});
