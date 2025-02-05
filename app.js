let amigos = [];

function adicionarNomes() {
    let input = document.getElementById('amigo');
    let nomes = input.value;

    if (nomes === "") {
        alert('Por favor, insira um nome');
    } else {
        amigos.push(nomes);
        input.value = "";
        console.log(amigos)
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ''

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length < 1) {
        return alert('Adicione amigos para fazer o sorteio!')
    } else { 
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoEscolhido = amigos[indiceAleatorio]
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `Seu amigo secreto é ${amigoEscolhido}`
    }
}