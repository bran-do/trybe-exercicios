const { readCharsData, writeCharsData } = require('./fsUtils');

const ALL_CHARS_DATA_PATH = '../data/simpsons.json';
const SIMPSON_FAMILY_DATA_PATH = '../data/simpsonFamily.json';

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome.
async function printAllChars() {
  const charList = await readCharsData(ALL_CHARS_DATA_PATH);
  charList.forEach((char) => console.log(`${char.id} - ${char.name}`));
};

/* B - Crie uma função que receba o id de uma personagem como parâmetro 
   e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. 
   Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”. */
async function findById(id) {
  try {
    const charList = await readCharsData(ALL_CHARS_DATA_PATH);
    return charList.find((char) => char.id = id)

  } catch (err) {
    console.error('id não encontrado.');
  }
};

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function deleteCharcters() {
    const charList = await readCharsData(ALL_CHARS_DATA_PATH);
    const newCharList = charList.filter((char) => char.id !== '6' && char.id !== '10');
    await writeCharsData(ALL_CHARS_DATA_PATH, newCharList);
};

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function createFamily() {
  const charList = await readCharsData(ALL_CHARS_DATA_PATH);
  const simpsonFamily = charList.filter((char) => parseInt(char.id) <= 4);
  await writeCharsData(SIMPSON_FAMILY_DATA_PATH, simpsonFamily);
};

async function addNelson() {
  const charList = await readCharsData(ALL_CHARS_DATA_PATH);
  const simpsonFamily = await readCharsData(SIMPSON_FAMILY_DATA_PATH);
  const simpsonsPlusNelson = [...simpsonFamily, charList.find((char) => char.name === 'Nelson Muntz')];

  await writeCharsData(SIMPSON_FAMILY_DATA_PATH, simpsonsPlusNelson);
};

async function nelsonForMaggie() {
  const charList = await readCharsData(ALL_CHARS_DATA_PATH);
  const simpsonFamily = await readCharsData(SIMPSON_FAMILY_DATA_PATH);
  const simpsonsMinusNelson = simpsonFamily.filter((char) => char.id !== '8');
  const simpsonsPlusMaggie = [...simpsonsMinusNelson, charList.find((char) => char.name === 'Maggie Simpson')];

  await writeCharsData(SIMPSON_FAMILY_DATA_PATH, simpsonsPlusMaggie);
};
