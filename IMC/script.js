
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const valorIMC = document.querySelector('.returnoIMC')

const calculo = () => {
  const peso = parseFloat(inputPeso.value);
  const altura = parseFloat(inputAltura.value);

  if(inputPeso.value === '' || inputAltura.value === '') {
    alert('Altura ou peso está vazio.')
    return valorIMC.innerText = 'Campos estão vazios'
  }

  if(isNaN(peso) || isNaN(altura)) {
   alert("Digite um número para o calculo!!!!")
   return;
  }

  if(!/^-?\d+\.\d+$/.test(inputAltura.value)) {
    alert("Altura deve ter ponto decimal")
    return valorIMC.innerText = 'Altura não têm ponto'
  }
    const IMC =  peso / (altura ** 2)
    console.log(IMC)
    const teste = IMC.toFixed(1)
    const resultadoIMC = filtraIMC(teste)
    valorIMC.innerText = resultadoIMC;
}

const filtraIMC = (imc) => {
  if(imc < 18.5) return 'Magreza	0';
  if(imc >= 18.5 && imc <= 24.9) return 'Normal	0';
  if(imc >= 25.0 && imc <= 29.9) return 'Sobrepeso	I';
  if(imc >= 30.0 && imc <= 39.9) return 'Obesidade	II';
  if(imc >= 40.0) return 'Obesidade Grave	III';
}