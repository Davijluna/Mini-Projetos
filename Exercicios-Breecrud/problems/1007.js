// ** Diferença **
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

export function problem (input) {
  const [A, B, C, D] = lines;
  
  const diferenca = A * B - C * D;
  
  console.log(`DIFERENCA = ${diferenca}`);
}
