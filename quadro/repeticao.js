const nomes = ['Maria', 'Arthur', 'Algusto', 'Mara'];

const cliente = 'Mara';

for(let i = 0; i < nomes.length; i += 1) {
  if(nomes[i] === cliente) {
    console.log('Nome encontrado.')
  }
  console.log('Não encontramos nome')
}