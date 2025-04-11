
function salvar() {
    localStorage.info = document.getElementById("name").value
    alert("Informações salvas !!!!")
    location.reload()
}

function carregar() {
    if (localStorage.info) document.getElementById("name").value = localStorage.info
    if (!localStorage.info) alert("Não a mensagens a carregar ...")
    
}

function remover() {
    if (!localStorage.info) {
        alert("mensagem já foi apagada!!!")
    }
    localStorage.clear()
    location.reload()
}

console.log(nome)