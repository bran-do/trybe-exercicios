import validator from 'validator';

const campoDeTexto = document.querySelector('#text-input');
const button = document.querySelector('#button');
const seletor = document.querySelector('#dropdown-tipo');
const textoDeSaida = document.querySelector('#result');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const types = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
    mobilePhone: validator.isMobilePhone(campoDeTexto.value, 'pt-BR'),
    cep: validator.isPostalCode(campoDeTexto.value, 'BR'),
    licensePlate: validator.isLicensePlate(campoDeTexto.value, 'pt-BR'),
  };

  textoDeSaida.innerHTML = `A validação retornou ${types[seletor.value]}`;
});