/O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigoSorteado = "";
let listaDeAmigos = []; // Lista de amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo'); // Pegando referência do input
    let nome = inputAmigo.value.trim(); // Obtém o nome e remove espaços extras

    if (nome !== "") { // Verifica se o nome não está vazio
        listaDeAmigos.push(nome); // Adiciona o nome à lista
        inputAmigo.value = ''; // Limpa o campo de entrada
        atualizarListaDeAmigos(); // Atualiza a lista exibida
        console.log(listaDeAmigos); // Para verificar a lista no console
    } else {
        alert("Por favor, insira um nome válido.");
    }
}

function atualizarListaDeAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpa a lista antes de adicionar os novos elementos
    listaDeAmigos.forEach((amigo) => { // Itera sobre a lista de amigos
        let li = document.createElement('li'); // Cria um elemento de lista
        li.textContent = amigo; // Define o texto do elemento
        ul.appendChild(li); // Adiciona o elemento à lista
    });
}

function selecionarAmigoAleatorio() { // Retorna um amigo aleatório da lista
    if (listaDeAmigos.length === 0) { // Verifica se a lista está vazia
        return "A lista de amigos está vazia."; // Retorna uma mensagem
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length); // Gera um índice aleatório
    return listaDeAmigos[indiceAleatorio];
}

function sortearAmigo() {
    let amigoSorteado = selecionarAmigoAleatorio(); // Seleciona um amigo aleatório
    document.getElementById('amigo-sorteado').textContent = amigoSorteado; // Exibe o amigo sorteado
}
