
document.addEventListener("DOMContentLoaded", function () {
    
    const botaoMenu = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (botaoMenu && menu) {
        botaoMenu.addEventListener("click", function () {
            const menuAberto = menu.classList.toggle("aberto");

            botaoMenu.setAttribute("aria-expanded", menuAberto);
            botaoMenu.setAttribute(
                "aria-label",
                menuAberto ? "Fechar menu" : "Abrir menu"
            );
        });

        // Fecha o menu depois de clicar em um link
        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("aberto");
                botaoMenu.setAttribute("aria-expanded", "false");
                botaoMenu.setAttribute("aria-label", "Abrir menu");
            });
        });
    }

    // Validação do formulário de contato
    const formulario = document.getElementById("form-contato");
    const statusFormulario = document.getElementById("status-form");

    if (formulario && statusFormulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const assunto = document.getElementById("assunto").value;
            const mensagem = document.getElementById("mensagem").value.trim();

            if (nome.length < 2) {
                statusFormulario.textContent =
                    "Digite seu nome completo.";
                return;
            }

            if (!email || !email.includes("@") || !email.includes(".")) {
                statusFormulario.textContent =
                    "Digite um e-mail válido.";
                return;
            }

            if (!assunto) {
                statusFormulario.textContent =
                    "Selecione um assunto.";
                return;
            }

            if (mensagem.length < 10) {
                statusFormulario.textContent =
                    "A mensagem precisa ter pelo menos 10 caracteres.";
                return;
            }

            statusFormulario.textContent =
                "Formulário validado com sucesso! Para enviar sua mensagem à equipe, ainda é necessário conectar um serviço de envio.";

            formulario.reset();
        });
    }
});
