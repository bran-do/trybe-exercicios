// Acesse o elemento where-are-you.
const whereAreYou = document.querySelector('#where-are-you');

// Acesse parent a partir de where-are-you e adicione uma color a ele.
whereAreYou.parentElement.style.color = "blue";

// Acesse o first-child-of-child e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
const firstChildOfChild = document.querySelector('#first-child-of-child');
firstChildOfChild.innerText = 'Esse é um novo texto!'

// Acesse o first-child a partir de parent.
const firstChild = document.querySelector('#parent').firstChild;

// Acesse o first-child a partir de where-are-you.
firstChild = document.querySelector('#where-are-you').parentElement;

// Acesse o texto Attention! a partir de where-are-you.
const attention = document.querySelector('#where-are-you').nextSibling;

// Acesse o third-child a partir de where-are-you.
const thirdChild = document.querySelector('#where-are-you').nextElementSibling;

//Acesse o third-child a partir de parent.
thirdChild = document.querySelector('#parent').lastChild.previousSibling;