let valor = {}


document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()

    let inputNome = document.getElementById("nome").value;
    let inputEmail = document.getElementById("email").value;
    let inputIdade = document.getElementById("idade").value;

    let info;

    if (info === '')

    info += inputNome
    info += inputEmail
    info += inputIdade

    valor = info
    
    console.log(inputNome)
    console.log(inputEmail)
    console.log(inputIdade)
})

console.log(valor)
