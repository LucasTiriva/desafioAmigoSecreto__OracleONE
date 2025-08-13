let listaDeAmigos = [];
const input = document.getElementById('amigo');
const ulAmigos = document.getElementById('listaAmigos');
const ulResultado = document.getElementById('resultado');
const mensagem = document.getElementById('mensagem');


//Aqui é a função para receber o nome e verificar se o usuário digitou mesmo algo e se o nome já foi incluido.
function adicionarAmigo() {
    const nome = input.value.trim();

    if (!nome) {
        alert('Por favor, digite o nome do amigo.');
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        input.value = '';
        return;
    }

    listaDeAmigos.push(nome);
    input.value = '';
    input.focus();

    mostrarListaTela();
}


//Aqui printa na tela os nomes da lista.
function mostrarListaTela() {
    ulAmigos.innerHTML = '';
    listaDeAmigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        ulAmigos.appendChild(li);
    });
}


//aqui é feito o serteio do nome e a verificação se tem pelo menos 2 nomes na lista.
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('É preciso ter pelo menos dois amigos para sortear.');
        return;
    }

    ulResultado.innerHTML = '';

    // Sorteia um índice aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[indiceSorteado];

    const li = document.createElement('li');
    li.textContent = nomeSorteado;
    ulResultado.appendChild(li);
}