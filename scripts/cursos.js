const cursosOption = [
    [
        "Mecanica",
        "Eletrotecnica",
        "Automação Industrial",
        "Mecanica Automotiva",
        "Desenvolvimento Web",
        "Análise e Desenvolvimento de Sistemas"
    ],
    [
        "Redes de Computadores",
        "Segurança da Informação",
        "Banco de Dados",
        "Inteligência Artificial",
        "Design Gráfico",
        "Marketing Digital"
    ],
    [
        "Eletromecânica",
        "Construção Civil",
        "Mecatrônica",
        "Logística",
        "Qualidade e Produtividade",
        "Segurança do Trabalho"
    ],
];

const salaryRanges = {
    "Mecanica": "Entre 5.000 e 6.000",
    "Eletrotecnica": "Entre 4.500 e 5.500",
    "Automação Industrial": "Entre 6.000 e 7.000",
    "Mecanica Automotiva": "Entre 4.000 e 5.000",
    "Desenvolvimento Web": "Entre 5.500 e 7.000",
    "Análise e Desenvolvimento de Sistemas": "Entre 6.000 e 8.000",
    "Redes de Computadores": "Entre 4.000 e 5.000",
    "Segurança da Informação": "Entre 6.000 e 8.000",
    "Banco de Dados": "Entre 5.000 e 7.000",
    "Inteligência Artificial": "Entre 8.000 e 10.000",
    "Design Gráfico": "Entre 3.000 e 4.500",
    "Marketing Digital": "Entre 4.000 e 5.500",
    "Eletromecânica": "Entre 4.500 e 5.500",
    "Construção Civil": "Entre 3.500 e 4.500",
    "Mecatrônica": "Entre 5.000 e 6.500",
    "Logística": "Entre 3.500 e 4.500",
    "Qualidade e Produtividade": "Entre 4.000 e 5.000",
    "Segurança do Trabalho": "Entre 4.000 e 5.500"
};

let currentPage = 0; 

function updateOptions() {
    const optionsContainer = document.getElementById("Cursos-options");
    optionsContainer.innerHTML = '';
    cursosOption[currentPage].forEach(curso => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = curso;
        button.onclick = () => selectOption(curso);
        optionsContainer.appendChild(button);
    });
}

function changePage(page) {
    if (page < 0 || page >= cursosOption.length) return;

    currentPage = page;

    const paginationSpans = document.querySelectorAll('.pagination span');
    paginationSpans.forEach((span, index) => {
        span.classList.toggle('active', index === currentPage);
    });
    document.getElementById('backButton').style.display = currentPage > 0 ? 'inline' : 'none'; 
    document.getElementById('nextButton').style.display = currentPage < cursosOption.length - 1 ? 'inline' : 'none';
    updateOptions();
}

function nextPage() {
    changePage(currentPage + 1);
}

function previousPage() {
    changePage(currentPage - 1);
}

updateOptions();

function selectOption(option) {
    console.log("Opção selecionada: " + option);
    alert("Opção selecionada: "+ option)
    localStorage.setItem('selectedCourse', option);
    localStorage.setItem('salaryRange', salaryRanges[option]);
    window.location.href = "SalarioEstimado.html"; 
}

document.getElementById('nextButton').onclick = nextPage;
document.getElementById('backButton').onclick = previousPage;