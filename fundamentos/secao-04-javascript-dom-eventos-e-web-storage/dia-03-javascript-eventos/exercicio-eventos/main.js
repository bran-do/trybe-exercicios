const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele.
// 1.1. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
 
/* R: porque a primeira caixa possui uma classe 'tech' que está deslocada no CSS.
*/

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando este for clicado.

firstLi.addEventListener("click", techClassAdd);
secondLi.addEventListener("click", techClassAdd);
thirdLi.addEventListener("click", techClassAdd);

function techClassAdd() {
    firstLi.classList.remove('tech');
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');

    event.target.className = 'tech';
    let position = '';

    event.target === firstLi && (input.placeholder = "Alterar a primeira tecnologia"); 
    event.target === secondLi && (input.placeholder = "Alterar a segunda tecnologia"); 
    event.target === thirdLi && (input.placeholder = "Alterar a terceira tecnologia"); 
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como é possível fazer isso? Dica: Lembre-se do método `.classList.remove`.

/* Já embuti na 'techClassAdd()' */

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech'.
input.addEventListener("keyup", textChange);

function textChange() {
    const techClassElement = document.querySelector('.tech');
    techClassElement.innerText = event.target.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy',
// redirecione para alguma página.
myWebpage.addEventListener("dblclick", redirect);

function redirect() {
    window.open('http://bran-do.github.io', '_blank')  
}
// 4.1. Que tal redirecionar para seu portfólio? Dica: Lembre-se dos métodos `window.location.replace` e `window.open`.

/* Feito. */

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo.
myWebpage.addEventListener("mouseover", colorChange);
myWebpage.addEventListener("mouseleave", colorReset);

function colorChange() {
    myWebpage.style.color = 'green';
}

function colorReset() {
    myWebpage.removeAttribute('style');
}
// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.