
let info = JSON.parse(localStorage.getItem("pessoa")) || [];

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()

    let inputNome = document.getElementById("nome").value;
    let inputEmail = document.getElementById("email").value;
    let inputIdade = document.getElementById("idade").value;

    let pessoa = { nome: inputNome, idade: inputIdade, email: inputEmail}
    localStorage.setItem("pessoa", JSON.stringify(info))
    info.push(pessoa)
    // DICA NÃO É UM ARRAY, POR CONTA DISSO NÃO ESTÁ FUNCIONANDO 
    // 1. PREOCURAR UMA FUNÇÃO QUE POSSA LIDAR COM UM OBJETO PARA ADICIONAR AS VALORES
    alert("Informações salvas !!!!")
})


function mostrarDados () {
    // alert("teste")
    let dados = JSON.parse(localStorage.getItem("pessoa"))
    console.log(typeof dados)
}