// Rolar um segundo dado até o número ser exatamente igual ao primeiro;

let dado1 = Math.ceil(Math.random() * 6) // esse comando pega um número aleatório de 1 a 6;
console.log('Resultado do dado 1:', dado1);

let dado2 = 0; // 0 para sempre entrar no while abaixo;

while (dado1 !== dado2) {
    dado2 = Math.ceil(Math.random() * 6);
    console.log('Resultado do dado 2:', dado2);
}