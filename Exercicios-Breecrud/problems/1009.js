// ** Salário com Bônus
export function problem (lines) {
  const [name, salaryFixo, Total] = lines;
  const bonus = ((Number(Total) * 15) / 100 ) + Number(salaryFixo)
  console.log(`TOTAL = R$ ${bonus.toFixed(2)}`);
}