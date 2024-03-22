// const fs = require('fs') // Aqui eu importo ao modulo fs 

// // Nesta condição eu verifico se o arquivo existe na reiz do diretório.
// if(fs.existsSync('meuArquivo.txt')) { 
//   // Se o arquivo existir ele exibira esse console com a mesagem.
//   console.log('the file exists.')

//   // Se não ouver o arquivo ele será criado na parte abaixo.
// }else{
//   // Nesta parte criamos o arquivo  e temos essas parâmetros para a função receber
//   fs.writeFileSync('meuArquivo.txt', 'hello content', function(err) {
//     if (err) {
//       throw err;
//     }else{
//       console.log('Saved!')
//     }
//   });
// }


var fs = require('fs'); // Aqui eu importo ao modulo fs 

try {
  fs.appendFileSync('message.txt', 'data to append'); // Adiciona o arquivo message.txt com o conteúdo 'data to append'.
  console.log('The "data to append" was appended to file !'); // Depois de adicionado ele exibe esse console no terminal.
} catch (err) {
  /* Handle the error */
}
