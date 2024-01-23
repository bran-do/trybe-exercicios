const fs = require('fs').promises;
const path = require('path');

async function readCharsData(dataPath) {
  try {
    const data = await fs.readFile(path.resolve(__dirname, dataPath));
    const characters = JSON.parse(data);
    return characters;

  } catch (err) {
    console.error(`Erro na leitura do arquivo: ${err}`);
  }
}

async function writeCharsData(filePath, newData) {
  try {
    await fs.writeFile(path.resolve(__dirname, filePath), JSON.stringify(newData));
    console.log('Arquivo escrito com sucesso.')

  } catch (err) {
    console.error(`Erro ao escrever arquivo: ${err}`);
  }
}

module.exports = { readCharsData, writeCharsData };
