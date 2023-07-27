// 4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult = 20;

const countA = (namesArray) => {
  const allLetters = namesArray.join('').toLowerCase().split('');
  const allAs = allLetters.filter((letter) => letter === 'a');
  return allAs.length;
};

console.log(`Resultado da função countA: ${countA(names)}`);
console.log(`Resultado esperado: ${expectedResult}`);
