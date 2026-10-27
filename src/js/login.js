(function () {
    const form = document.getElementById('login-form');
    const campoEmail = document.getElementById('login-email');
    const campoSenha = document.getElementById('login-senha');
    const erro = document.getElementById('login-erro');
  
    const botaoMenu = document.getElementById('login-hamburguer');
    const overlay = document.getElementById('login-overlay');
    const menu = document.getElementById('login-menu');
  
    function abrirMenu() {
      document.body.classList.add('login-menu-aberto');
      botaoMenu.setAttribute('aria-expanded', 'true');
    }
  
    function fecharMenu() {
      document.body.classList.remove('login-menu-aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    }
  
    botaoMenu.addEventListener('click', function () {
      if (document.body.classList.contains('login-menu-aberto')) {
        fecharMenu();
      } else {
        abrirMenu();
      }
    });
  
    overlay.addEventListener('click', fecharMenu);
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', fecharMenu);
    });
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') fecharMenu();
    });
  
    form.addEventListener('submit', function (evento) {
      evento.preventDefault();
  
      const email = campoEmail.value.trim();
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      if (!emailValido) {
        erro.textContent = 'Digite um e-mail válido.';
        campoEmail.focus();
        return;
      }
  
      if (campoSenha.value === '') {
        erro.textContent = 'Digite sua senha.';
        campoSenha.focus();
        return;
      }
  
      erro.textContent = '';
      window.location.href = 'index.html'; 
    });
  })();