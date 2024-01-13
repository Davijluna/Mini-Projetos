export function problem (lines) {
  const space = ' '
  const [codePartOne, numberPartOne, valuePartOne] = lines[0].split(space).map(Number)
  const [codePartTwo, numberPartTwo, valuePartTwo] = lines[1].split(space).map(Number)
  const Total = numberPartOne * valuePartOne + numberPartTwo * valuePartTwo;
  console.log(`VALOR A PAGAR: R$ ${Total.toFixed(2)}`)
}