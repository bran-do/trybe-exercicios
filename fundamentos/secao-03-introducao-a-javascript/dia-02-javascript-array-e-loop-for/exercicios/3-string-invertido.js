// Impressão de string invertido com o laço for

let word = 'marrocos';
let invertWord = '';

for (let i = (word.length - 1); i >= 0; i -= 1) {
    invertWord += word[i];
}
console.log(invertWord);