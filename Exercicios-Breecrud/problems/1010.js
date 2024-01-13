export function problem (input) {
  const [
     codePartOne,
     numberPartOne, 
     valuePartOne, 
     codePartTwo, 
     numberPartTwo, 
     valuePartTwo] = input

     const Total = (valuePartOne * numberPartOne) + (valuePartTwo * numberPartTwo);



  console.log(`VALOR A PAGAR: R$ ${Total.toFixed(2)}`)


}