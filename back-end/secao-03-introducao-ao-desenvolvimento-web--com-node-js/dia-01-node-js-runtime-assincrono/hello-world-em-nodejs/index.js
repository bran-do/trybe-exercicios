const readline = require('readline-sync');

const nome = readline.question('Qual é o seu nome? ');
const idade = readline.questionInt('Qual é a sua idade? ');

console.log(`Olá, ${nome}! Parece que você tem ${idade} anos...`);