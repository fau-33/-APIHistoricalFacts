// Estado da aplicação
let allFacts = [];
let currentYear = null;

// Elementos DOM
const yearSelect = document.getElementById('yearSelect');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const errorMessage = document.getElementById('errorMessage');
const factCard = document.getElementById('factCard');
const factYear = document.getElementById('factYear');
const factDescription = document.getElementById('factDescription');
const factImage = document.getElementById('factImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Inicializar aplicação
async function init() {
  try {
    await loadAllFacts();
    populateYearSelect();
    setupEventListeners();
  } catch (error) {
    showError('Erro ao carregar a aplicação. Por favor, recarregue a página.');
    console.error('Erro na inicialização:', error);
  }
}

// Carregar todos os fatos da API
async function loadAllFacts() {
  try {
    const response = await fetch('/api/fatos');
    if (!response.ok) {
      throw new Error('Erro ao buscar fatos históricos');
    }
    allFacts = await response.json();
  } catch (error) {
    throw error;
  }
}

// Popular o select com os anos
function populateYearSelect() {
  allFacts.forEach(fact => {
    const option = document.createElement('option');
    option.value = fact.Ano;
    option.textContent = fact.Ano;
    yearSelect.appendChild(option);
  });
}

// Configurar event listeners
function setupEventListeners() {
  yearSelect.addEventListener('change', handleYearChange);
  prevBtn.addEventListener('click', showPreviousFact);
  nextBtn.addEventListener('click', showNextFact);
}

// Handler para mudança de ano
async function handleYearChange(event) {
  const year = event.target.value;
  if (year) {
    await loadFactByYear(year);
  }
}

// Carregar fato por ano
async function loadFactByYear(year) {
  showLoading();

  try {
    const response = await fetch(`/api/fato?ano=${year}`);

    if (response.status === 404) {
      showError('Fato não encontrado para o ano informado.');
      return;
    }

    if (!response.ok) {
      throw new Error('Erro ao buscar fato');
    }

    const data = await response.json();
    currentYear = year;
    displayFact(data.ano);
    updateNavigationButtons();

  } catch (error) {
    showError('Erro ao carregar o fato histórico. Tente novamente.');
    console.error('Erro:', error);
  }
}

// Exibir fato na tela
function displayFact(fact) {
  // Atualizar conteúdo
  factYear.textContent = fact.Ano;
  factDescription.textContent = fact.Fato;

  // Definir imagem (usar imagem específica ou placeholder)
  const imagePath = getImagePath(fact.Ano);
  factImage.src = imagePath;
  factImage.alt = `Imagem representando: ${fact.Fato}`;

  // Mostrar card com animação
  hideLoading();
  hideError();
  factCard.classList.remove('hidden');

  // Trigger reflow para animação
  void factCard.offsetWidth;
}

// Obter caminho da imagem
function getImagePath(year) {
  // Mapeamento de anos para IDs do Pexels (fotos reais ou representativas)
  const imageMap = {
    '1920': '466685',   // Sufrágio / Época vintage
    '1922': '1183992',  // Arte moderna / Galeria
    '1929': '220201',   // Wall Street / Cidade antiga
    '1939': '163428',   // Guerra / História
    '1944': '163428',   // Guerra / História
    '1945': '163428',   // Guerra / História
    '1950': '1884574',  // Estádio de futebol
    '1960': '1106476',  // Arquitetura moderna
    '1961': '41162',    // Espaço / Astronauta
    '1969': '41162',    // Lua / Espaço
    '1970': '1884574',  // Futebol / Estádio
    '1976': '16129703', // Computador antigo
    '1981': '15852419', // Tecnologia retro
    '1989': '1548398',  // Muro / História
    '1996': '15403241', // Ciência (Dolly)
    '1998': '15731647', // Tecnologia (Google)
    '2001': '161901',   // Memorial
    '2002': '15183316', // Troféu / Esporte
    '2007': '15566567', // iPhone / Smartphone
    '2008': '16119747', // Gráficos (Crise)
    '2014': '15080986', // Estádio / Copa
    '2020': '4033148',  // COVID / Saúde
    '2022': '16462412'  // Guerra / Bandeira (conceitual)
  };

  const id = imageMap[year] || '1461360'; // Default: Estante de livros histórica
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;
}

// Mostrar fato anterior
function showPreviousFact() {
  const currentIndex = allFacts.findIndex(f => f.Ano === currentYear);
  if (currentIndex > 0) {
    const previousYear = allFacts[currentIndex - 1].Ano;
    yearSelect.value = previousYear;
    loadFactByYear(previousYear);
  }
}

// Mostrar próximo fato
function showNextFact() {
  const currentIndex = allFacts.findIndex(f => f.Ano === currentYear);
  if (currentIndex < allFacts.length - 1) {
    const nextYear = allFacts[currentIndex + 1].Ano;
    yearSelect.value = nextYear;
    loadFactByYear(nextYear);
  }
}

// Atualizar estado dos botões de navegação
function updateNavigationButtons() {
  const currentIndex = allFacts.findIndex(f => f.Ano === currentYear);

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === allFacts.length - 1;
}

// Mostrar estado de loading
function showLoading() {
  factCard.classList.add('hidden');
  errorState.classList.add('hidden');
  loadingState.classList.remove('hidden');
}

// Esconder estado de loading
function hideLoading() {
  loadingState.classList.add('hidden');
}

// Mostrar erro
function showError(message) {
  factCard.classList.add('hidden');
  loadingState.classList.add('hidden');
  errorMessage.textContent = message;
  errorState.classList.remove('hidden');
}

// Esconder erro
function hideError() {
  errorState.classList.add('hidden');
}

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
