// 1 - Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
function imprimeIdade() {
    let idade;
    for (idade = 30; idade <= 40; idade += 1) {
        console.log('Idade dentro do for:', idade)
    }
    console.log('Idade fora do for:', idade)
}
imprimeIdade()

// 2 - Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.
const pessoa = {
    nome: 'Henri',
    idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// 3 - Modifique a variável para que não ocorra Erro.
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// 4 - Modifique as concatenações para template literals.
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é ${soma(a,b)}.`);

// 5 - Modifique a estrutura das funções a seguir para que elas sejam arrow functions.
//      Transforme a função numeroAleatorio em uma arrow function.
const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// 6 - Transforme a função hello em uma arrow function.
const hello = nome => `Olá, ${nome}!`
let nome = 'Ivan';
console.log(hello(nome));

// 7 - Transforme a função nomeCompleto em uma arrow function.
const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let nome2 = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome2, sobrenome));

// 8 - Altere a expressão if/else utilizando ternary operator.
let speed = 90;
const speedCar = (speed) => {
    return speed >= 120 
        ? `Você ultrapassou o limite de velocidade` 
        : `Você está na velocidade permitida`
};
console.log(speedCar(speed));