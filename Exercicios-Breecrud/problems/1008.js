// ** Diferença **
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
export function problem (input) {
  const [NumEmdeployer, hourWork, valueHours] = lines;
  const Salary = hourWork * valueHours;
  
  console.log(`NUMBER = ${NumEmdeployer}
  SALARY = U$ ${Salary.toFixed(2)}`)
}
