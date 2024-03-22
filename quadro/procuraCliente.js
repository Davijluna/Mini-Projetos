const nomes = ['Arthur', 'Algusto', 'Mara'];

const cliente = 'Mara';

const encontraNome = (nome, cliente) => {
  if(nome.includes(cliente)) return 'Nome existe';
    return 'Não existe Nome'
  
}

console.log(encontraNome(nomes, cliente))