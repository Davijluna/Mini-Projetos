const getValores = document.querySelector('.valores');
const getParagrafos = document.querySelector('#paragrafos');
const paragrafosArray = [];

const actionValor = () => {
  const creatTag = document.createElement('p');
  creatTag.innerText = getValores.value;
  getValores.value = '';

  // Criando botão
  const buttonRemove = document.createElement('button');
  buttonRemove.innerText = 'Excluir';

  // Adicionando parágrafo e botão ao contêiner
  getParagrafos.appendChild(creatTag);
  getParagrafos.appendChild(buttonRemove);

  // Adicionando evento de remoção ao botão
  buttonRemove.onclick = () => {
    remove(buttonRemove);
    remove(creatTag);
  }


  // Adicionando referência ao parágrafo no array
  paragrafosArray.push(creatTag);

  return getParagrafos;
};

const remove = (paragrafo) => {
  getParagrafos.removeChild(paragrafo);

  // Removendo a referência do parágrafo do array
  const index = paragrafosArray.indexOf(paragrafo);
  if (index > -1) {
    paragrafosArray.splice(index, 1);
  }
};



