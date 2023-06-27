import validator from 'validator';

const campoDeTexto = document.querySelector('#text-input');
const button = document.querySelector('#button');
const seletor = document.querySelector('#dropdown-tipo');
const textoDeSaida = document.querySelector('#result');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    email: validator.isEmail(campoDeTexto.value),
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});
