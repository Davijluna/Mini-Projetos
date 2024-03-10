const reader = require('xlsx')
const file = reader.readFile('./fornecedores.xlsx');
const sheet = file.Sheets['Planilha1'];
const json = reader.utils.sheet_to_json(sheet)

const jsonInObject = JSON.stringify(json)
const jsonParse = JSON.parse(jsonInObject)

for(let i = 0; i < jsonParse.length; i += 1) {
  console.log(jsonParse[i])
}






















// const fs = require('fs')
// const caminho = 'arquivo.txt'

// fs.readFile(caminho, 'utf8', (err, data) => {
//   if(err) {
//     console.log('Ouve um erro no arquivo', err)
//   }
//     console.log('conteudo do arquivo >>>>>', data)
// })