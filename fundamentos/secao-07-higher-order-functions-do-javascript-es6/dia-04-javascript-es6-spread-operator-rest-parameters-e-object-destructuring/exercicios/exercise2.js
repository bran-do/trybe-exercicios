/* Exercício 2
Crie uma função sum que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros. 
Ao chamar a função dessa forma : sum(4,5,6), o número 15 deve ser retornado.
*/

// escreva sum abaixo

const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr);

console.log(sum(4, 5, 6));
