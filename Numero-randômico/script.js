// mostrando numero aleatório no terminal.

// let number = 10

// console.log(Math.random(number))


// Obtendo um número aleatório entre zero e um

// function getRandom() {
//   return Math.random()
// }

// console.log(getRandom())

// Obtendo um número aleatório entre dois valores

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}


let number = 7.9

console.log(Math.floor(number), 'TESTE')

console.log(getRandomArbitrary(1, 5))

