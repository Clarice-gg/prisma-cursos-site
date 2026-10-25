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

// Formulário de Contato
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (contactForm && submitBtn) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        contactForm.reset();
        submitBtn.textContent = "Mensagem enviada!";
        submitBtn.classList.add('enviado');
        submitBtn.disabled = true;
    });
}

// Funcionalidade da Barra de Pesquisa
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('site-search');

if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const termoBusca = searchInput.value.trim().toLowerCase();

        if (termoBusca === "") return;
        const elementosParaBuscar = document.querySelectorAll('h1, h2, h3, h4, p, .card-curso');
        let encontrado = false;

        for (let elemento of elementosParaBuscar) {
            const textoElemento = elemento.textContent.toLowerCase();

            if (textoElemento.includes(termoBusca)) {
                elemento.scrollIntoView({ behavior: 'smooth', block: 'center' });
                elemento.style.transition = "background-color 0.4s ease";
                const corOriginal = elemento.style.backgroundColor;
                elemento.style.backgroundColor = "rgba(77, 212, 205, 0.3)";

                setTimeout(() => {
                    elemento.style.backgroundColor = corOriginal;
                }, 2000);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            alert("Nenhum resultado encontrado para: " + termoBusca);
        }
        searchInput.value = "";
    });
}