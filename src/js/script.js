// Aguarda o site carregar totalmente para rodar o código
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("cta-btn");

    botao.addEventListener("click", function() {
        alert("Bem-vindo à Prisma Cursos! O site está funcionando perfeitamente.");
    });
});

// Seleciona o botão do menu e a lista de links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Quando o usuário clicar no botão...
if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Adiciona ou remove a classe 'active' do menu
        navLinks.classList.toggle('active');
    });
}

// Funcionalidade de rolagem horizontal com as setinhas na página de cursos
const cursosScroll = document.getElementById('cursosScroll');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

if (cursosScroll && btnPrev && btnNext) {
    const scrollAmount = 340; 

    btnPrev.addEventListener('click', () => {
        cursosScroll.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    btnNext.addEventListener('click', () => {
        cursosScroll.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}