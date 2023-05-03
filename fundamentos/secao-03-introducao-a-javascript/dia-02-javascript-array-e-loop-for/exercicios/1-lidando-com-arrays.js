let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 

// Imprime todos os valores do array
for (let i of numbers) {
    console.log(i);
}

// Soma de todos os valores do array
let sum = 0

for (let i2 of numbers) {
    sum += i2;
}
console.log("A soma de todos os valores do array é:", sum);

// Média artimética dos valores do array
let mediaAritmetica = sum / numbers.length;
console.log("A média aritmética entre os valores é:", mediaAritmetica);

// Média artimética maior que 20?
if (mediaAritmetica > 20) {
    console.log("O valor da média artimética é maior que 20");
} else {
    console.log("O valor da média artimética é menor ou igual a 20");
}

// Qual o maior valor do array?
let maior = 0;

for (let i3 of numbers) {
    if (i3 > maior) {
        maior = i3;
    }
}
console.log("O maior valor do array é:", maior);

// Qual o menor valor do array?
let menor = maior;

for (let i4 of numbers) {
    if (i4 < menor) {
        menor = i4;
    }
}
console.log("O menor valor do array é:", menor);

// Quantos números ímpares no array?
let impares = 0;

for (let i5 of numbers) {
    if (i5 % 2 !== 0) {
        impares += 1;
    }
}

if (impares > 0) {
    console.log("O array contém", impares,"número(s) ímpar(es)");
} else {
    console.log("O array não contém nenhum número ímpar");
}

// Criando um array de 1 até 25 e imprimindo o resultado
let numbers2 = [];

for (let i6 = 1; i6 <= 25; i6 += 1) {
    numbers2.push(i6);
}

console.log("Eis um array de 1 até 25:", numbers2);

// Divisão de cada elemento do array acima por 2
console.log("Eis o resultado cada um desses 25 números divididos por 2:");
for (let i7 of numbers2) {
    console.log(i7 / 2);
}