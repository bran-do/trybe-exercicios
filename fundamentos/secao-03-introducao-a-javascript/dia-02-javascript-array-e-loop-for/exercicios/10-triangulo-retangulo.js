// Imprime triângulo retângulo com base a altura de tamanho 'n'

let n = 5;

let linha = '';

for (let i = 1; i <= n; i += 1) {
    linha += '*';
    console.log(linha)
}

// Aqui não há a necessidade de zerar o string 'linha', pois ele vai acumulando os asteriscos da iteração anterior.