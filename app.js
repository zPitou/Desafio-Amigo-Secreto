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