// Pelo menos um par na sequência de três números

let a = 1;
let b = 3;
let c = 1564;
let umPar = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    umPar = true;
}

console.log(umPar);