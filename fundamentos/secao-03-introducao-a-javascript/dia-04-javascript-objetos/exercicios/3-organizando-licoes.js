let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function adicionaTurno(object, key, value) {
    return object[key] = value;
}

adicionaTurno(lesson2, 'turno', 'noite')

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listaKeys(objeto) {
    let keys = [];
    for (let key in objeto) {
        keys.push(key);
    }
    return keys;
}

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function size(objeto) {
    return Object.entries(objeto).length;
}

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listaValores(objeto) {
    let values = [];
    for (let value in objeto) {
        values.push(objeto[value]);
    }
    return values;
}

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
let allLessons = {};
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

// 6 - Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
function totalEstudantes(objeto) {
    let totalValue = 0;
    for (let value in objeto) {
        totalValue += objeto[value].numeroEstudantes;
    }
    return totalValue;
}

// 7 - Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto.
function obtemValor(objeto, posicao) {
    return Object.values(objeto)[posicao];
}

// 8 - Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela.
function encontraPar(objeto, chave, valor) {
    let existe = false;
    let objectEntries = Object.entries(objeto);
    for (let key in Object.entries(objeto)) {
        if (objectEntries[key][0] === chave && objectEntries[key][1] === valor) {
            existe = true;
        }
    }
    return existe;
}