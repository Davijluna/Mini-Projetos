let adicion = document.getElementsByClassName('pai')
console.log(adicion);


function verificaNome(email) {
  let comSelect = document.querySelector('.pai')
  if(comSelect.innerHTML != /\S+@\S+\.\S+/.test(email))  {
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
