// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = []

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return ;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
} 

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `<lis class="result-item">El amigo secreto es: <strong>${amigoSorteado}</strong></li>`
}
