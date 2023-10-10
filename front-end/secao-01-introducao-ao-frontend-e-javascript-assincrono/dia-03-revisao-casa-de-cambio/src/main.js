import Swal from 'sweetalert2';

// Definindo uma função que pode disparar qualquer mensagem de erro:
function errorMessage(error) {
  return {
    title: 'Erro!',
    text: error,
    icon: 'error',
    confirmButtonText: 'Ok',
  };
}

// Key e URL:
const ACCESS_KEY = 'apikey=fca_live_zZNOnUTiReCA4qCiF51zfDdcSP0lMxLOHf8ydBL2';
const URL = `https://api.freecurrencyapi.com/v1/latest?${ACCESS_KEY}&base_currency=`;

// Seletores iniciais:
const input = document.getElementById('input');
const searchBtn = document.querySelector('.search-btn');
const currencyTitle = document.getElementById('currency-title');
const rateTable = document.getElementById('currency-list');

// Limpando a lista e o título a cada nova requisição:
function cleanTable() {
  currencyTitle.textContent = '';

  const { children } = rateTable;
  if (children.length > 0) {
    while (rateTable.lastElementChild) {
      rateTable.removeChild(rateTable.lastElementChild);
    }
  }
}

// Listagem dos câmbios retornados pela API na página:
function listRates(allRates) {
  const { data } = allRates;
  const currencies = Object.keys(data);

  currencyTitle.textContent = input.value;

  currencies.forEach((rate) => {
    const rateValue = data[rate];

    const li = document.createElement('li');
    const fixNumber = 3; // Lint não permite magic number na expressão abaixo:
    li.textContent = `${rate}: ${rateValue.toFixed(fixNumber)}`;
    rateTable.appendChild(li);
  });
}

// Chamada da API + chamada para listagem de moedas:
function getRates(currency) {
  fetch(`${URL}${currency}`)
    .then((response) => response.json())
    .then((object) => listRates(object))
    .catch(() => Swal.fire(errorMessage('Moeda inválida')));
}

// Lançando erro para input vazio, caso contrário inicia requisição + listagem:
function handleSearch(inputValue) {
  cleanTable();

  if (inputValue.length > 0) {
    getRates(inputValue);
  } else {
    Swal.fire(errorMessage('Moeda inválida'));
  }
}

// Event listener, finalmente:
searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  handleSearch(input.value);
});
