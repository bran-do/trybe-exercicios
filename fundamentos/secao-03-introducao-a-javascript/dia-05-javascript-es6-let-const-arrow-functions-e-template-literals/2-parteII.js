// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (string) => {
  let status = 'desligado';
  if (string === 'desligado') {
    status = 'ligado';
  }
  console.log(`O motor está ${status}`);
  return status;
};

// 2 - Crie a função circleArea, que calcule a área de um círculo.
const circleArea = (radius) => {
  const pi = 3.14;
  return typeof (radius) !== 'number'
    ? 'O parâmetro radius deve ser um número'
    : `Essa é a área do círculo: ${pi * (radius ** 2)}`;
};

// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
function longestWord(phrase) {
  let wordArray = phrase.split(' ');
  let longest = wordArray[0];
  for (let word of wordArray) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}