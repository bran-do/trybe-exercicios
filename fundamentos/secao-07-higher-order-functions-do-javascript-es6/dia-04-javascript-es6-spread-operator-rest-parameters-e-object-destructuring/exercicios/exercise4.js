/* Exercício 4
Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
*/

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (peopleList) => {
  const twentiethC = peopleList.filter((person) => person.bornIn < 2001)
  const australianAnd20thC = twentiethC.filter((person) => person.nationality === 'Australian')
  return australianAnd20thC;
};

console.log(filterPeople(people));
