let contador = 0;

function incrementar() {
    contador++;
    atualizarTela();
}

function resetar() {
    contador = 0;
    atualizarTela();
}

function atualizarTela() {
    document.getElementById("contador").innerText = contador;
}
console.log(contador);