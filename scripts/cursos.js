// Array de opções de profissão por página
const cursosOption = [
    [
        "Estagiário/Aprendiz", 
        "Autônomo", 
        "Auxiliar Administrativo", 
        "Motorista", 
        "Auxiliar de Serviços Gerais", 
        "Atendente"
    ],
    [
        "Vendedor", 
        "Auxiliar de Logística", 
        "Administrador", 
        "Analista Financeiro", 
        "Mecânico", 
        "Eletricista"
    ],
    [
        "Gerente", 
        "Arquiteto", 
        "Porteiro", 
        "Zelador", 
        "Professor(a)", 
        "Contador(a)"
    ],
];

let currentPage = 0; // Inicia na primeira página

// Função para atualizar as opções de profissão
function updateOptions() {
    const optionsContainer = document.getElementById("Cursos-options");
    optionsContainer.innerHTML = ''; // Limpa opções atuais

    cursosOption[currentPage].forEach(job => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = job;
        button.onclick = () => selectOption(job); // Adiciona a lógica de seleção
        optionsContainer.appendChild(button);
    });
}

function changePage(page) {
    if (page < 0 || page >= cursosOption.length) return; // Verifica limites

    currentPage = page; // Atualiza a página atual

    // Atualiza a classe de seleção na paginação
    const paginationSpans = document.querySelectorAll('.pagination span');
    paginationSpans.forEach((span, index) => {
        span.classList.toggle('active', index === currentPage);
    });

    // Exibir/ocultar o botão de voltar
    document.getElementById('backButton').style.display = currentPage > 0 ? 'inline' : 'none'; // mostrar ou esconder

    // Exibir/ocultar o botão de avançar
    document.getElementById('nextButton').style.display = currentPage < cursosOption.length - 1 ? 'inline' : 'none'; // mostrar ou esconder

    updateOptions(); // Atualiza as opções
}

// Função para avançar uma página
function nextPage() {
    changePage(currentPage + 1);
}

// Função para voltar uma página
function previousPage() {
    changePage(currentPage - 1);
}

// Inicializa as opções
updateOptions();

// Função para selecionar uma opção
function selectOption(option) {
    console.log("Opção selecionada: " + option);
    alert("Opção selecionada: "+ option)
    // window.location.href = "Salario.html"; 
}

// Adiciona eventos aos botões de navegação
document.getElementById('nextButton').onclick = nextPage;
document.getElementById('backButton').onclick = previousPage;