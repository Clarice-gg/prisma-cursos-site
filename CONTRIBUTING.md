# Guia Completo de Contribuição - Prisma Cursos

Seja bem-vindo(a) ao guia de contribuição do nosso projeto! Este documento foi feito especialmente para orientar a equipe passo a passo no uso do **Git** e do **GitHub**, mesmo que você nunca tenha tido contato com as ferramentas antes. 

Sigam este manual com calma para trabalharmos em harmonia e sem sobrescrever o código dos demais integrantes.

---

## 0. Preparação do Ambiente (Primeiro Acesso)

Antes de mexer no código, você precisa ter algumas ferramentas instaladas no seu computador:
1. **VS Code:** Nosso editor de código oficial.
2. **Git:** O programa que gerencia as versões do projeto. (Se estiver no Windows, baixe e instale o **Git for Windows**; no Linux, instale via terminal com `sudo apt install git`).

### Configurando o Git pela primeira vez (Faça apenas uma vez por computador, apenas no primeiro acesso):
Abra o seu terminal (Prompt de Comando/Git Bash no Windows, ou Terminal no Linux) e digite seus dados para que o GitHub saiba que os códigos são seus:
```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@dominio.com"
```

## 1. Clonando o Repositório (Baixando o projeto para o PC)

Se você ainda não tem os arquivos na sua máquina, faça o seguinte:
- No GitHub, abra a página principal do repositório da Prisma Cursos.
- Clique no botão verde escrito "<> Code" e copie o link HTTPS (https://github.com/Clarice-gg/prisma-cursos-site.git).
- Abra a pasta onde você quer guardar o projeto no seu computador (por exemplo, na Área de Trabalho).
- Abra o terminal nessa pasta (ou abra o VS Code, clique em Terminal > New Terminal) e digite:
```bash
git clone https://github.com/Clarice-gg/prisma-cursos-site.git
```
- Entre na pasta recém-criada pelo terminal:
```bash
cd prisma-cursos-site
```

## 2. Criando sua branch de trabalho

Nunca edite ou crie códigos diretamente na branch `main`! A main é a versão oficial e estável do site. Cada funcionalidade deve ser feita na sua própria "ramificação" (branch).
Antes de começar a criar qualquer coisa, certifique-se de que você está na branch `main` e que ela está atualizada:
```Bash
git checkout main
git pull origin main
```
Crie e entre na sua nova branch com um nome que explique o que você vai fazer, seguindo o guia de boas práticas:
- `feat/<nome-da-branch>`: adição de uma nova funcionalidade ou seção.
- `fix/<nome-da-branch>`: correção de um erro.
- `style/<nome-da-branch>`: ajustes visuais que não alteram o comportamento do código.
- `refactor/<nome-da-branch>`: reorganização ou melhoria do código sem alterar funcionalidade.
- `docs/<nome-da-branch>`: alterações em documentação.

No Windows e Linux (exemplo):
```Bash
git checkout -b feature/<nome-da-branch>
```
## 3. Escrevendo Código e Salvando por commits

Com a sua branch criada, abra a pasta do projeto no VS Code.
Crie ou altere os arquivos HTML, CSS ou JavaScript conforme a sua tarefa.
Instale a extensão Live Server no VS Code para testar o site rodando localmente no navegador (**opcional**).

Quando terminar uma parte do trabalho e quiser salvá-la no histórico, verifique o que foi modificado:
```Bash
git status
```
(Os arquivos alterados aparecerão em vermelho).

Adicione os arquivos para o rastreamento do Git:
```Bash
git add .
```
(Isso prepara todos os arquivos modificados para o salvamento).

Faça o "Commit" (salva oficialmente com uma mensagem explicando o que você fez), por exemplo:
```Bash
git commit -m "feat: cria a estrutura e o estilo da seção quem somos"
```

## 4. Enviando para o GitHub e Abrindo o Pull Request (PR)

Agora que seu código está salvo na sua máquina (na sua branch), você precisa enviá-lo para o GitHub para que o grupo possa juntar com a versão oficial (main).
- Envie a sua branch para o GitHub pela primeira vez:
```Bash
git push -u origin feature/nome-da-branch
```
(Nas próximas vezes que fizer commit nessa mesma branch, basta digitar apenas `git push`).

- Abra o Pull Request (PR):
Acesse o repositório do projeto da Prisma Cursos no site do GitHub pelo navegador, ele vai mostrar um aviso em destaque dizendo que você fez um push recentemente, com um botão verde escrito "Compare & pull request". Clique nele.
Dê um título claro ao seu Pull Request e escreva uma breve descrição do que foi feito, depois clique em `Create pull request`.

- Revisão e Merge:
Peça para um colega do grupo dar uma olhada no código clicando em reviewers no canto direito após a abertura do pull request.
Estando tudo certo, o responsável pelo repositório poderá clicar em Merge pull request para juntar o seu código na main.

## Dicas Importantes para Evitar Conflitos!

- **Comunique-se com o grupo:** Sempre avise no grupo de comunicação qual Issue você está fazendo para duas pessoas não trabalharem no mesmo arquivo ao mesmo tempo.
- **Atualize antes de começar:** No dia seguinte, antes de começar a codar de novo, lembre-se de voltar para a main (`git checkout main`), atualizar (`git pull origin main`) e depois voltar para a sua branch de trabalho!
Sempre rode esses comandos acima para atualizar a main antes da criação da sua branch, para evitar conflitos posteriores e se certificar que está sempre trabalhando com a versão mais atualizada do projeto.
