// Método 'bubble sort' multiplicando um número pelo outro

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMulti = [];
let multi;

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        multi = numbers[index] * numbers[secondIndex];
    }
    numbersMulti.push(multi);
}

console.log(numbersMulti);