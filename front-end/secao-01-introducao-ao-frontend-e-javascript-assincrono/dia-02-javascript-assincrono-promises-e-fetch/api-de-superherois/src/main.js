import Swal from 'sweetalert2';

const card = document.querySelector('#card');
const name = document.querySelector('#hero-name');
const btn = document.querySelector('#random-btn');

const BASE_URL = 'https://akabab.github.io/superhero-api/api';

const MAX_HERO_ID = 900;

const randomID = () => Math.floor(Math.random() * MAX_HERO_ID);
// Estou usando 900 como máximo pois a API possui apenas 731 heróis e preciso que ela eventualmente retorne um erro.

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const id = randomID();

  fetch(`${BASE_URL}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      card.src = data.images.md;
      name.innerHTML = data.name;
    })

    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
