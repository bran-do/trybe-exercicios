// Maior número primo entre dois números

let x = 2;
let y = 50;

let maiorPrimo = 1;
let divCount = 0;

for (let i = x; i <= y; i += 1) {
    for (let divisor = 2; divisor < i; divisor += 1) {
        if (i % divisor == 0) {
            divCount += 1;
        }
    }

    if (divCount == 0) {
        maiorPrimo = i;
    }

    divCount = 0;
}  

console.log("Entre", x, "e", y, "o maior número primo é:", maiorPrimo);