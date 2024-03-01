
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const valorIMC = document.querySelector('.returnoIMC')

const calculo = () => {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if(inputPeso.value === '' || inputAltura.value === '') {
    valorIMC.className = 'colorOrange';
    alert('Altura ou peso está vazio.')
    return valorIMC.innerText = 'Campos estão vazios'
  }

  if(isNaN(peso) || isNaN(altura)) {
   alert("Digite um número para o calculo!!!!")
   return valorIMC.innerText = 'Você não digitou um número';
  }

  if(!/^-?\d+\.\d+$/.test(inputAltura.value)) {
    valorIMC.className = 'colorOrange';
    alert("Altura deve ter ponto decimal")
    return valorIMC.innerText = 'Altura não têm ponto'
  }
    const result = calculoIMC(peso, altura)
    return valorIMC.innerText = result;
}

const calculoIMC = (peso, altura) => {
  const IMC =  peso / (altura ** 2)
  const teste = IMC.toFixed(1)
  return filtraIMC(teste)
}

const filtraIMC = (imc) => {
  if(imc < 18.5) {
    valorIMC.className = 'colorRed';
    return 'Magreza	0';
  }
  if(imc >= 18.5 && imc <= 24.9) {
    valorIMC.className = 'colorClear';
    return 'Normal	0';
  }
  if(imc >= 25.0 && imc <= 29.9) {
    valorIMC.className = 'colorOrange';
    return 'Sobrepeso	I';
  }
  if(imc >= 30.0 && imc <= 39.9) {
    valorIMC.className = 'colorRed';
    return 'Obesidade	II';
  }
  if(imc >= 40.0) {
    valorIMC.className = 'colorRed';
    return 'Obesidade Grave	III';
  }
}