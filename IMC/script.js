
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');


const calculo = () => {
  
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  const valeuPeso = peso;
  const valeAltura = altura;
  
  console.log(typeof altura, 'altura')

  if(typeof valeAltura !== 'number' || typeof valeuPeso !== "number") {
   console.log("Digite um número para o calculo!!!!")
  } else {
    const IMC =  valeuPeso / (valeAltura * valeAltura)
    console.log(IMC)
  }
  
}