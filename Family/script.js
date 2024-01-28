let adicion = document.getElementsByClassName('pai')
console.log(adicion);


function verificaNome() {
  let comSelect = document.querySelector('.pai')
  if(!comSelect.innerHTML) {
    let criandoElemeto = document.createElement('p');
    criandoElemeto.innerHTML = 'Olá Mundo !!!!'
     return comSelect.appendChild(criandoElemeto)
  } else{
    let criandoElemeto = document.createElement('p');
    criandoElemeto.innerHTML = 'Outro Nome !!!!'
    return comSelect.appendChild(criandoElemeto);
  }
}

verificaNome()
