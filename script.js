const soma = (number1, number2) => {
  return number1 + number2
}

const sub = (number1, number2) => {
  return number1 - number2
}

const mult = (number1, number2) => {
  return number1 * number2
}

const div = (number1, number2) => {
  return number1 / number2
}

const functionOperation = (firstName, Operation, lastName) => {
  if(Operation === '+') return soma(firstName, lastName)
  if(Operation === '-') return sub(firstName, lastName)
  if(Operation === '*') return mult(firstName, lastName)
  if(Operation === '/') return div(firstName, lastName)
}

console.log(functionOperation(1, '+', 1))