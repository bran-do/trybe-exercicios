let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// Incluir clientes no TrybeBank
function incluiCliente(nome) {
    if (typeof(nome) === 'string') {
        clientesTrybeBank.push(nome);
        return '"' + nome + '" foi adicionado à lista de clientes.';
    }
    else {
        return 'O nome precisa ser um string.';
    }
}

// Testes de inclusão de cliente
console.log(incluiCliente('Felipe'));
console.log(clientesTrybeBank);
console.log("");
console.log(incluiCliente(6));
console.log("");

// Excluir clientes no TrybeBank
function excluiCliente(nome) {
    if (typeof(nome) === 'string') {
        if (clientesTrybeBank.includes(nome)) {
            let indexNome = clientesTrybeBank.indexOf(nome);
            clientesTrybeBank.splice(indexNome, 1);
            return '"' + nome + '" foi excluído da lista de clientes.';
        }
        else {
            return '"' + nome + '" não foi localizado na lista de clientes.'
        }
    }
    else {
        return 'O nome precisa ser um string.'
    }
}

// Testes exclusão de cliente
console.log(excluiCliente('Gus'));
console.log(clientesTrybeBank);
console.log("");
console.log(incluiCliente(6));
console.log("");