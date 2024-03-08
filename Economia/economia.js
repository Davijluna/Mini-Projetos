const getValores = document.querySelector('.valores');
let getParagrafos = document.querySelector('#paragrafos')

const actionValor = () => {
  const creatTag = document.createElement('p');
  creatTag.innerText += getValores.value
  getValores.value = ''
  
  // criando button
  
  const buttonRemove = document.createElement('button')
  buttonRemove.innerText = 'Excluir';
  getParagrafos.appendChild(creatTag)
  getParagrafos.appendChild(buttonRemove).onclick(remove())
  return getParagrafos
}


const remove = () => {
  console.log('Hello World !!')
}

