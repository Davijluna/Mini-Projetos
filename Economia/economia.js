const getValores = document.querySelector('.valores');
let getParagrafos = document.querySelector('#paragrafos')

const actionValor = () => {
  const creatTag = document.createElement('p');
  creatTag.innerText += getValores.value
  getParagrafos.appendChild(creatTag)
  return getParagrafos

}