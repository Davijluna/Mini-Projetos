const fs = require('fs');
const reader = require('xlsx')
const filePath = './fornecedores.xlsx'
const file = reader.readFile('./fornecedores.xlsx');

let data = []

const sheets = file.SheetNames

console.log(sheets)

for(let index = 0; index < sheets.length; index += 1) {
  const temp = reader.utils.sheet_to_json(
    file.Sheets[file.SheetNames[index]])
    temp.forEach((res) => {
      data.push(res)
    })
}

console.log(data)

// 'Planilha1'

// fs.readFile(filePath, 'utf8', (err, data) => {
//   if(err) {
//     console.log('Ouve um erro ao carregar o arquivo', err)
//   }
//     console.log('Conteúdo do arquivo:', data)
// })
























// const fs = require('fs')
// const caminho = 'arquivo.txt'

// fs.readFile(caminho, 'utf8', (err, data) => {
//   if(err) {
//     console.log('Ouve um erro no arquivo', err)
//   }
//     console.log('conteudo do arquivo >>>>>', data)
// })