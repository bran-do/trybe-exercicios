// Imprime triângulo retângulo espelhado (em relação ao exercício número 10) de tamanho 'n'

let n = 5;

let asterisco = '*';
let espaco = '';
let posicao = n - 1

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    for (let indexColuna = 0; indexColuna < n; indexColuna +=1) {
        if (indexColuna < posicao) {
            espaco += ' ';
        } 
        else {
            espaco += asterisco;
        }
    }
    console.log(espaco);
    espaco = '';
    posicao -= 1;
}