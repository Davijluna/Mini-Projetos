// Todo: Na documentação usa o "import" mas nesse arquivo de exercicio usamos o "require"
// import { rename } from 'node:fs';

const fs = require('fs')

// ** Escreve dados em arquivos de forma sincrona.

// const texto = "Escrevendo usando a função writeFileSync!!!!!"
// const writeFileTes = fs.writeFileSync('file.txt', texto);

// console.log(writeFileTes)



// ** Utilizada para ler o conteúdo de um arquivo de forma síncrona.
// const returno =  fs.readFileSync('./readFile.txt', 'utf-8');

// console.log(returno)


//  ** Deleta arquivo mostrando o seu cominho.
  // fs.unlink('./ParaEstudo/fileTest.txt', (err) => {
  //   if (err) throw err, 'Não foi encontrado o arquivo ou ele não existe!!!!';
  //   console.log('successfully deleted fileTest');
  // })

// ** renomeia arquivo
// fs.rename('fileTest.txt', 'DaviPamela.txt', (err) => {
//   if (err) throw err;
//   console.log('Renome complete!')
// })