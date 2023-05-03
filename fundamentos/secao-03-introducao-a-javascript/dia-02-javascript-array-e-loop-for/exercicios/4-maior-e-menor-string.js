// Imprimir o maior e o menor string contido num array

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = array[0];
let menor = array[0];

// Maior palavra
for (let palavra of array) {
    if (palavra.length > maior.length) {
        maior = palavra;
    }
}

// Menor palavra
for (let palavra of array) {
    if (palavra.length < menor.length) {
        menor = palavra;
    }
}
//
console.log("A maior palavra do array é:", maior);
console.log("A menor palavra do array é:", menor);