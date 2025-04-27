
function salvar() {

    localStorage.info += document.getElementById("name").value
    localStorage.info += document.getElementById("age").value
    localStorage.info += document.getElementById("phone").value
    localStorage.info += document.getElementById("email").value
    alert("Informações salvas !!!!")
    location.reload()
}

function carregar() {
  
    console.log(localStorage.info)

    if (localStorage.info) document.getElementById("name").value = localStorage.info
    if (!localStorage.info) alert("Não a mensagens a carregar ...")
    
}

function remover() {
    if (!localStorage.info) {
        alert("mensagem já foi apagada!!!")
    }
    localStorage.clear()
    location.reload()
    location.reload()
}

console.log(nome)