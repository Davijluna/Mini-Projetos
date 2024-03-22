const nomes = ['Arthur', 'Algusto', 'Mara'];

const cliente = 'Mara';

const encontraNome = (nome) => {
  const encontraNome = nome.includes(cliente)
  if(encontraNome)return 'Nome existe';
    return 'Não existe Nome'
  
}

console.log(encontraNome(nomes))