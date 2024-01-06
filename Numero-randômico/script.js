// mostrando numero aleatório no terminal.

// let number = 10

// console.log(Math.random(number))


// Obtendo um número aleatório entre zero e um

// function getRandom() {
//   return Math.random()
// }

// console.log(getRandom())

// Obtendo um número aleatório entre dois valores.
// Obtendo números inteiros sobre dois números.

function getRandomArbitrary(min, max) {
  let maxNumber = Math.ceil(max);
  let minNumber = Math.floor(min)
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
}


// let number = 7.9

// console.log(Math.floor(number), 'TESTE')

console.log(getRandomArbitrary(1, 5000))


