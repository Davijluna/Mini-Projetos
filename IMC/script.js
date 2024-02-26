
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const valorIMC = document.querySelector('.returnoIMC')

const calculo = () => {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  const valeuPeso = peso;
  const valeAltura = altura;

  if(isNaN(valeAltura) || isNaN(valeuPeso)) {
   alert("Digite um número para o calculo!!!!")
  }
    const IMC =  valeuPeso / (valeAltura * valeAltura)
    console.log(filtraIMC(IMC.toFixed(2)))
    valorIMC.innerText = filtraIMC(IMC.toFixed(2))

}

const filtraIMC = (imc) => {
  if(imc < 18.5) {
    return 'Magreza	0'
  }
  if(imc >= 18.5 && imc <= 24.9) {
    return 'Normal	0'
  }
  if(imc >= 25.0 && imc <= 29.9) {
    return 'Sobrepeso	I'
  }
  if(imc >= 30.0 && imc <= 39.9) {
    return 'Obesidade	II'
  }
  if(imc >= 40.0) {
    return 'Obesidade Grave	III'
  }
}