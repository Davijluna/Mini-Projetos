// ** Área
export function problem(lines) {
  // ? resolvi  com o metodo split
  const [A, B, C] = lines[0].split(' ').map(Number);
  const pi = 3.14159;
  const triangulo = (A * C) / 2;
  const circulo = (C **2) * pi;
  const trapezio = ((A + B) * C)/2;
  const quadrado = B **2;
  const retangulo = B * A;

  console.log(`TRIANGULO: ${triangulo.toFixed(3)}
CIRCULO: ${circulo.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${quadrado.toFixed(3)}
RETANGULO: ${retangulo.toFixed(3)}`)
}

// !A=(a+b)h/2.