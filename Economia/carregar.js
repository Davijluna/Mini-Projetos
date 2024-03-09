const fs = require('fs')
const caminho = 'arquivo.txt'

fs.readFile(caminho, 'utf8', (err, data) => {
  if(err) {
    console.log('Ouve um erro no arquivo', err)
  }
    console.log('conteudo do arquivo >>>>>', data)
})

