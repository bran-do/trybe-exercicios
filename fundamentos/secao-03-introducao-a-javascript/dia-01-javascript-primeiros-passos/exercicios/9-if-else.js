// Pelo menos um ímpar na sequência de três números

let a = 2;
let b = 6;
let c = 11;
let umImpar = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    umImpar = true;
}

console.log(umImpar);