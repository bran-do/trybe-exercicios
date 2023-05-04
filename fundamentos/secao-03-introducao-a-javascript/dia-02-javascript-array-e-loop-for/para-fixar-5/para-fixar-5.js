/* Percorre o array fruits somando todos os valores.
Caso o valor final seja maior que 15, imprime-o. 
Caso o valor final seja igual ou menor que 15, imprime a mensagem "Valor menor que 16" */

let fruits = [2, 1, 10, 1, 1];
let soma = 0;

for (let i of fruits) {
    soma = soma + i;
}

if (soma > 15) {
    console.log(soma);
} else {
    console.log("Valor menor que 16");
}