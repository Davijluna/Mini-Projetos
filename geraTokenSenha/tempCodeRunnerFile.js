function geraSenha(comprimento) {
  let caracteres = 'ABCDEFGHIJLMNOPQRSTUVXZWYabcdefghijlmnopqrstuvxzwy1234567890_'
  let senha =''
  for(let i = 0; i < comprimento; i+= 1) {
    let random = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[random]
  }
  return senha
}

console.log(geraSenha(10000));