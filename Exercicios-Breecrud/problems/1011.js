//  ** Esfera exercicio 1011
export function problem(lines) {
  const Raio = parseFloat(lines)
  const pi = 3.14159;
  const formula = (4.0/3)*pi*Raio**3 ;
  console.log(`VOLUME = ${formula.toFixed(3)}`)
}