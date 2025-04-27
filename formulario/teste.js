// Receber uma string e retornar a ultima letra dessa string.

let letra = "Davi"
// function lastLetter(letter) {
//    for (i = 0; i < letter.length; i += 1) lastLetter = letter[i]
//       console.log(lastLetter)
// }

let arrayLetras = letra.split('')
let teste = {
   nome: "Davi",
   idade:37,
   sexo: "M"
}
console.log(teste.nome)
console.log(Array.isArray(teste))

// Função	O que faz
// Array.isArray()	Verifica se é um array (true ou false)
// Array.from()	Converte coisas parecidas com array (como strings ou NodeLists)
// Array.of()	Cria um array com os argumentos que você passar

// Método	O que faz
// push()	Adiciona item no final
// pop()	Remove o último item
// shift()	Remove o primeiro item
// unshift()	Adiciona item no começo
// slice()	Corta uma parte (sem alterar o original)
// splice()	Corta/insere itens (altera o original)
// map()	Cria um novo array transformado
// filter()	Cria novo array com itens que passaram num teste
// forEach()	Executa uma função pra cada item (sem retornar nada)
// reduce()	Reduz tudo a um valor só (como somar tudo)
// find()	Encontra o primeiro que satisfaz a condição
// includes()	Verifica se um valor está no array
// indexOf()	Retorna a posição do valor
// sort()	Ordena os itens
// reverse()	Inverte a ordem
// join()	Junta os itens numa string
// concat()	Junta arrays
// every()	Verifica se todos os itens passam no teste
// some()	Verifica se algum item passa no teste