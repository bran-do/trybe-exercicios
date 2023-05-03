// Imprime quadrado de tamanho 'n'

let n = 5;

let linha = '';

for (let i = 1; i <= n; i += 1) {
    for (let i2 = 1; i2 <= n; i2 += 1) {
        linha += '*';
    }
    console.log(linha)
    linha = '';
}