// Refatoração da função excluiCliente do exercício anterior (para-fixar-2/trybebank2.js) 
// A ideia é diminuir a complexidade da função, dividindo-as em funções menores

let clientesTrybeBank = ['Ada', 'John', 'Gus'];
console.log(clientesTrybeBank);
console.log("");

// Excluir clientes no TrybeBank

// 1. O 'nome' é um string?
function validaString(nome) {
    stringValido = false;

    if (typeof(nome) === 'string') {
        stringValido = true;
    }
    
    return stringValido;
}

// 2. O nome existe na lista?
function validaNome(nome) {
    nomeNaLista = false;

    if (clientesTrybeBank.includes(nome)) {
        nomeNaLista = true;
    }

    return nomeNaLista;
}

// 3. Função final
function excluiCliente(nome) {

    if (validaString(nome) && validaNome(nome)) {  
        let indexNome = clientesTrybeBank.indexOf(nome);
        clientesTrybeBank.splice(indexNome, 1);
        return '"' + nome + '" foi removido da lista.'
    }
    else {
        return "O nome informado não se encontra na lista, ou não é um nome válido."
    }
}    

// Testes exclusão de cliente
console.log(excluiCliente('Gus'));
console.log(clientesTrybeBank);
console.log("");