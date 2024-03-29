/* Exercício 1: Vamos modelar algumas partes de um software de uma escola. 
Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: 
um que calcula a soma das notas da pessoa estudante 
e outro que calcula a média das notas da pessoa estudante.
*/

class Student {
  registration: string;
  name: string;
  testGrades: [number, number, number, number];
  workGrades: [number, number];

  constructor(
    registration: string,
    name: string,
    testGrades: [number, number, number, number],
    workGrades: [number, number]
  ) {
    this.registration = registration;
    this.name = name;
    this.testGrades = testGrades;
    this.workGrades = workGrades;
  }

  gradeSum() {
    const testGradesSum = this.testGrades.reduce((acc, curr) => acc + curr);
    const workGradesSum = this.workGrades.reduce((acc, curr) => acc + curr);
    return testGradesSum + workGradesSum;
  }

  averageGrade() {
    const gradesSum = this.gradeSum();
    return gradesSum / 6;
  }
};

/* Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. 
Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
  - A pessoa cliente deverá conter o nome;
  - O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
  - O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) 
  e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. 
A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.
*/

