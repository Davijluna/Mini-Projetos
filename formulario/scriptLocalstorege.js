
function salvar() {
    localStorage.info = document.getElementById("name").value

}

function carregar() {
    document.getElementById("name").value = localStorage.info
}

function remover() {
    localStorage.inf = localStorage.removeItem
}

console.log(nome)