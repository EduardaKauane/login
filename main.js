// cria função para validar preenchimento de campos da tela de login
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // estrutura que verifica se os campos foram preenchidos
    if(!loginEmail || !loginSenha) {
        alert("Favor, preencha todos os campos")
    } else {
        window.location.href = 'cadastro.html';
    }
}

// cria array de forma global
var dadosLista = [];

// função para salvar usuário
function salvarUser() {
    let nomeUser = document.getElementById('nomeuser').value;

    if(nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista); // mostra no console o array
        criaLista();
        document.getElementById('nomeUser').value= "";
    } else {
        alert("Usuário, favor preencher o campo nome")
    }
}

// função para criar lista do array
function criaLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td> <button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// função para editar nomes da lista
function editar(i) {
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}

// função para excluir nomes da lista
function excluir(i) {
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}