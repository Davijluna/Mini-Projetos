// ** Area do Quadrado.
export function problem(lines) {
  const raio = Number(lines[0])
  const n = 3.14159;
  const area = n * raio**2 
  console.log(`A=${area.toFixed(4)}`);
}