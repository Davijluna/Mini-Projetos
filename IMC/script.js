
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const valorIMC = document.querySelector('.returnoIMC')

const calculo = () => {
  /\d{1}\.?\d{2}/
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  const valeuPeso = peso;
  const valeAltura = altura;

  if(/\d{1}\.?\d{2}/.test(valeAltura)) {
    alert("Altura deve ter ponto decimal")
    return valorIMC.innerText = 'Altura não têm ponto'
  }
  if(isNaN(valeAltura) || isNaN(valeuPeso)) {
   alert("Digite um número para o calculo!!!!")
  }
    const IMC =  valeuPeso / (valeAltura **2)
    console.log(filtraIMC(IMC.toFixed(1)))
    const teste = IMC.toFixed(1)
    valorIMC.innerText = filtraIMC(teste)

}

const filtraIMC = (imc) => {
  if(imc < 18.5) return 'Magreza	0';
  if(imc >= 18.5 && imc <= 24.9) return 'Normal	0';
  if(imc >= 25.0 && imc <= 29.9) return 'Sobrepeso	I';
  if(imc >= 30.0 && imc <= 39.9) return 'Obesidade	II';
  if(imc >= 40.0) return 'Obesidade Grave	III';
}