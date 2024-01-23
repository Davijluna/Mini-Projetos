//**Gerador de Senha */

function geraSenha(comprimento) {
  let caracteres = 'ABCDEFGHIJLMNOPQRSTUVXZWYabcdefghijlmnopqrstuvxzwy1234567890_'
  let senha =''
  for(let i = 0; i < comprimento; i+= 1) {
    let random = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[random]
  }
  return senha
}

console.log(geraSenha(10));

// let Objetão = [
//   {

//   }
// ]


// let pessoas = [
//   {nome: "Ana", idade:12 },
//   {nome: "Maria", idade:30 },
//   {nome: "Bete", idade:21 },
//   {nome: "Paula", idade:98 },
//   {nome: "Laura", idade:40 },
// ]

// let maisNovas = pessoas.filter((test) =>{ 
//   if (pessoas) return test.idade <= 30;
//   return test.idade > 12;
// })

// console.log(maisNovas)