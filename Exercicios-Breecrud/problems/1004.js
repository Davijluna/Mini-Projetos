// ** Produto Simples
export function problem(lines) {
  const mult = (a, b) => a * b;
  const result = lines.map(Number).reduce(mult);
  console.log(result)
}

//  ! A solução que passou no site 
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
//  const result = lines.map(Number);
//  const mult = result[0] * result[1]
//  console.log(`PROD = ${mult}`)