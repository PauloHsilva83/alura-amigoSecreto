//autor paulo henrique da silva
// Data: 17-03-2025
// Descrição: Este é um script JavaScript para um aplicativo de amigo secreto.
// Ele permite que o usuário adicione amigos a uma lista e sorteie um amigo aleatório.

let amigos = []; // Array para armazenar os nomes dos amigos


function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "") { // Verifica se o campo de texto está vazio
        alert("Por favor, digite um nome antes de adicionar."); // Exibe um alerta se o campo de texto estiver vazio
        return;
    }
    amigos.push(nomeAmigo); // Adiciona o nome ao array
    document.getElementById("amigo").value = "";  // Limpa o campo de texto após adicionar o amigo
    atualizarListaAmigos();
}

function atualizarListaAmigos() { // Função para atualizar a lista de amigos exibida
    let listaAmigos = document.getElementById("listaAmigos");   // Elemento <ul> que contém a lista de amigos
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach(function (amigo) {
        let itemLista = document.createElement("li"); // Cria um novo item de lista
        itemLista.textContent = amigo;  // Define o texto do item de lista como o nome do amigo
        listaAmigos.appendChild(itemLista); // Adiciona o item de lista à lista de amigos
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear."); // Exibe um alerta se não houver amigos para sortear
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o amigo sorteado

    let resultado = document.getElementById("resultado"); // Elemento <ul> que contém o resultado do sorteio
    resultado.innerHTML = ""; // Limpa a área de resultados antes de exibir o sorteio

    let itemResultado = document.createElement("li"); // Cria um novo item de lista
    itemResultado.textContent = "🎉 Amigo Sorteado: " + amigoSorteado;
    resultado.appendChild(itemResultado);



