
const formulario = document.getElementById("formCadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const erroNome = document.getElementById("erroNome");
const erroEmail = document.getElementById("erroEmail");
const erroTelefone = document.getElementById("erroTelefone");
const erroSenha = document.getElementById("erroSenha");
const erroConfirmarSenha = document.getElementById("erroConfirmarSenha");
const mensagem = document.getElementById("mensagem");

// Formata o telefone enquanto a pessoa digita
telefone.addEventListener("input", function () {
    let numeros = telefone.value.replace(/\D/g, "");

    if (numeros.length > 11) {
        numeros = numeros.slice(0, 11);
    }

    if (numeros.length > 10) {
        numeros = numeros.replace(
            /^(\d{2})(\d{5})(\d{4}).*/,
            "($1) $2-$3"
        );
    } else if (numeros.length > 6) {
        numeros = numeros.replace(
            /^(\d{2})(\d{4})(\d{0,4}).*/,
            "($1) $2-$3"
        );
    } else if (numeros.length > 2) {
        numeros = numeros.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
        );
    } else if (numeros.length > 0) {
        numeros = numeros.replace(/^(\d+)/, "($1");
    }

    telefone.value = numeros;
});

// Validação do formulário
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Limpa os erros anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroTelefone.textContent = "";
    erroSenha.textContent = "";
    erroConfirmarSenha.textContent = "";
    mensagem.textContent = "";

    let valido = true;

    // Verifica o nome
    if (nome.value.trim().split(/\s+/).length < 2) {
        erroNome.textContent = "Digite seu nome completo.";
        valido = false;
    }

    // Verifica o e-mail
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email.value.trim())) {
        erroEmail.textContent = "Digite um e-mail válido.";
        valido = false;
    }

    // Verifica o telefone
    const numerosTelefone = telefone.value.replace(/\D/g, "");

    if (numerosTelefone.length < 10 || numerosTelefone.length > 11) {
        erroTelefone.textContent = "Digite um telefone válido com DDD.";
        valido = false;
    }

    // Verifica o tamanho da senha
    if (senha.value.length < 8) {
        erroSenha.textContent = "A senha deve ter pelo menos 8 caracteres.";
        valido = false;
    }

    // Confere se as senhas são iguais
    if (senha.value !== confirmarSenha.value) {
        erroConfirmarSenha.textContent = "As senhas não são iguais.";
        valido = false;
    }

    // Mostra o resultado
    if (valido) {
        mensagem.textContent = "Formulário validado com sucesso!";
        mensagem.style.color = "#16834a";

        formulario.reset();
    } else {
        mensagem.textContent = "Confira os campos destacados.";
        mensagem.style.color = "#d52b45";
    }
});
