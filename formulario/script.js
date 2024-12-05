document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()

    let inputNome = document.getElementById("nome").value;
    let inputEmail = document.getElementById("email").value;
    let inputIdade = document.getElementById("idade").value;
    
    
    console.log(inputNome)
    console.log(inputEmail)
    console.log(inputIdade)
})
