// =========================================
// QUIZ DAS CARTAS (página quiz.html)
// =========================================
(function () {
    const codigo = document.getElementById('quiz-codigo');
    const CODIGO_DESCONTO = 'PRISMA15'; // combinem o código real com o grupo
    const LETRAS = ['A', 'B', 'C'];
  
    // "certa" = posição da resposta certa (0 = A, 1 = B, 2 = C)
    const perguntas = [
      {
        texto: 'Qual o foco da Prisma?',
        alternativas: [
          'Educação profissionalizante em tecnologia, design e gestão',
          'Preparação para vestibulares e concursos públicos',
          'Cursos de idiomas para viagens e intercâmbio'
        ],
        certa: 0
      },
      {
        texto: 'Como funciona o Modelo Híbrido Flexível da Prisma?',
        alternativas: [
          'Autonomia no formato online, com suporte direto nas aulas presenciais',
          'Só aulas presenciais, em horários fixos',
          'Todas as aulas são 100% gravadas, sem contato com professores'
        ],
        certa: 0
      },
      {
        texto: 'O que significa "Instrutores do Mercado" na Prisma Cursos?',
        alternativas: [
          'Professores que ensinam apenas teoria, sem prática',
          'Instrutores que só trabalham com vendas e comércio',
          'Professores que vivem o dia a dia do mercado e trazem desafios reais para a sala de aula'
        ],
        certa: 2
      }
    ];
  
    let perguntaAtual = null;
  
    function mostrarTela(id) {
      document.querySelectorAll('.quiz-tela').forEach(function (tela) {
        tela.classList.add('quiz-escondido');
      });
      document.getElementById(id).classList.remove('quiz-escondido');
    }
  
    function abrirPergunta(numero) {
      perguntaAtual = perguntas[numero];
      document.getElementById('quiz-texto-pergunta').textContent = perguntaAtual.texto;
  
      const caixa = document.getElementById('quiz-alternativas');
      caixa.innerHTML = '';
  
      perguntaAtual.alternativas.forEach(function (texto, i) {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'quiz-alternativa';
        botao.innerHTML = '<span class="quiz-letra">' + LETRAS[i] + '</span><span></span>';
        botao.lastChild.textContent = texto;
        botao.addEventListener('click', function () { responder(i); });
        caixa.appendChild(botao);
      });
  
      mostrarTela('quiz-tela-pergunta');
    }
  
    function responder(escolha) {
      if (escolha === perguntaAtual.certa) {
        mostrarTela('quiz-tela-certo');
      } else {
        mostrarTela('quiz-tela-errado');
      }
    }
  
    // --- Ligando os cliques ---
    document.querySelectorAll('.quiz-carta').forEach(function (carta) {
      carta.addEventListener('click', function () {
        abrirPergunta(Number(carta.dataset.pergunta));
      });
    });
  
    // Clicar no código mostra / esconde
    codigo.addEventListener('click', function () {
      codigo.textContent = (codigo.textContent === CODIGO_DESCONTO) ? '************' : CODIGO_DESCONTO;
    });
  
    // Esc volta para a página Quem Somos
    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape') window.location.href = 'quem_somos.html';
    });
  })();