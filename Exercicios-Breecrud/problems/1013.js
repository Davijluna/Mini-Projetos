export function problem(lines) {
  const [A, B, C] = lines.splice(' ').map(Number)
let valor1 = A;
let valor2 = B;
let valor3 = C;
const arrayValor = [valor1, valor2, valor3]

// console.log(typeof arrayValor[0])

let maiorValor = 0;
for (let i = 0; i < arrayValor.length; i += 1) {
  if (Number(maiorValor) === 0 || arrayValor[i] > maiorValor) {
    maiorValor = arrayValor[i]
  }
}
console.log(`${maiorValor} eh o maior`);

};

// ? maneira que o professor fez essa solução.

// const valores = lines[0].split(' ')

// const A = Number(valores[0])
// const B = Number(valores[1])
// const C = Number(valores[2])

// const maiorAB = (A + B + Math.abs(A - B)) /2
// const maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2

// console.log(`${maiorABC} eh o maior`)

