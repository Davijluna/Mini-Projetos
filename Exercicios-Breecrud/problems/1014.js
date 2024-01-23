// ** Consumo
export function problem(lines) {
  // const value = lines.splice(' ').map(Number);
  // const calculo = value[0] / value[1];
  // console.log(`${Number(calculo.toFixed(3))} km/l`);
  const valores = lines
  const mediaDeConsumo = (distancia, combustivel) => {
    return distancia /  combustivel;
  }
  const resultado = mediaDeConsumo(...valores)
  console.log(`${resultado.toFixed(3)} km/l`);
}

