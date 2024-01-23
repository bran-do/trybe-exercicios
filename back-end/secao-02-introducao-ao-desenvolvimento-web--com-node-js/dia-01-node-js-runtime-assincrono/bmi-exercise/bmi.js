const readline = require('readline-sync');

function bmi () {
  const weight = readline.questionFloat("What's your weight? ");
  const height = readline.questionFloat("What's your height? ");
  const bmi = weight / (height ** 2);

  console.log(`Seu IMC é ${bmi.toFixed(2)}`)
  bmi < 18.5 
    ? console.log('Você está abaixo do peso (magreza).')
  : (bmi >= 18.5 && bmi <= 24.9)
    ? console.log ('Você está com peso normal.')
  : (bmi >= 25 && bmi <= 29.9)
    ? console.log('Você está acima do peso (sobrepeso).')
  : (bmi >= 30 && bmi <= 34.9)
    ? console.log('Você está com obesidade de grau 1.')
  : (bmi >= 35 && bmi <= 39.9)
    ? console.log('Você está com obesidade de grau 2.')
  : (bmi >= 40)
    && console.log('Você está com obsidade de grau 3 e 4.');
};

bmi()