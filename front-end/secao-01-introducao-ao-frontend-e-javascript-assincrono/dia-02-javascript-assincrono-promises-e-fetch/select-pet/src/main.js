const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpriseBtn = document.querySelector('#surprise-btn');
const img = document.querySelector('#img');

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';

dogBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(DOG_API)
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
    });
});

catBtn.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(CAT_API)
    .then((response) => response.json())
    .then((data) => {
      img.src = data[0].url;
    });
});

surpriseBtn.addEventListener('click', (event) => {
  event.preventDefault();

  Promise.any([
    fetch(DOG_API),
    fetch(CAT_API),
  ])
    .then((response) => response.json())
    .then((data) => {
      const petURL = data.message || data[0].url;
      img.src = petURL;
    });
});
