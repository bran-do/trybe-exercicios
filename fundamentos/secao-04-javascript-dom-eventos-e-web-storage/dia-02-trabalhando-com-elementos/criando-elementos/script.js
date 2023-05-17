// Crie um irmão para elementoOndeVoceEsta.
const pai = document.querySelector('#pai');
let irmao = document.createElement('section');
pai.appendChild(irmao);

// Crie um filho para elementoOndeVoceEsta.
const ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
let filho1 = document.createElement('section');
ondeVoceEsta.appendChild(filho1);

// Crie um filho para primeiroFilhoDoFilho.
primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filho2 = document.createElement('section');
primeiroFilhoDoFilho.append(filho2);

// A partir desse filho criado, acesse terceiroFilho.
filhoCriado = document.querySelector('#primeiroFilhoDoFilho').firstChild;
terceiroFilho = filhoCriado.parentElement.parentElement.nextElementSibling;
