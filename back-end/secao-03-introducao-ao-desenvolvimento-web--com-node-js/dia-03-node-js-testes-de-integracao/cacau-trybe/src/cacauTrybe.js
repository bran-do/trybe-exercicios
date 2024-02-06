const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    console.log(`Erro na leitura do arquivo JSON: ${error}`);
    return null;
  }
};

const updateChocolate = async (id, body) => {
  const path = '/files/cacauTrybeFile.json'
  const file = await readCacauTrybeFile();
  const foundIndex = file.chocolates.findIndex((chocolate) => chocolate.id === id);

  const { name, brandId } = body;

  file.chocolates[foundIndex].name = name;
  file.chocolates[foundIndex].brandId = brandId;

  try {
    fs.writeFile(join(__dirname, path), JSON.stringify(file));
  } catch (error) {
    console.error(`Erro na atualização do arquivo JSON: ${error}`);
    return null;
  }
}

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByName = async (query) => {
  const { name } = query;
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(name.toLowerCase()));
};


module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    getChocolatesByName,
    updateChocolate,
};