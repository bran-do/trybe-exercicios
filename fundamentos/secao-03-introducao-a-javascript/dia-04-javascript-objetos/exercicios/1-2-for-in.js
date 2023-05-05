let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

// 1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log('O livro favorito de', leitor.nome + ' ' + leitor.sobrenome, "se chama '" + leitor.livrosFavoritos[0].titulo + "'");
console.log('----');

// 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:
// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

let livroFavorito2 = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}

leitor.livrosFavoritos.push(livroFavorito2);

// 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');