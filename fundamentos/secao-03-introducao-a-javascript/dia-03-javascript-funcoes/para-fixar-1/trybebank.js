// TrybeBank

let saldo = 100;

// Função de adicionar saldo
function adicionaSaldo(quantia) {
    let novoSaldo = saldo + quantia;
    return novoSaldo;
}

// Função de subtrair saldo
function subtraiSaldo(quantia) {
    let novoSaldo = saldo - quantia;
    return novoSaldo;
}

// Função de calcular taxa sob saldo
function taxaSobSaldo(taxa) {
    let taxaFinal = saldo * taxa;
    return taxaFinal;
}

// Função de dividir saldo
function divideSaldo(divisor) {
    let novoSaldo = saldo / divisor;
    return novoSaldo;
}

console.log(adicionaSaldo(300));
console.log(subtraiSaldo(50));
console.log(taxaSobSaldo(2));
console.log(divideSaldo(5));