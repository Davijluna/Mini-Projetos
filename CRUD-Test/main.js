const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
  clearFileds();
  document.getElementById('modal')
    .classList.remove('active')
    
}

  // CRUD - create read update delete

const getLocaStorage = () => JSON.parse(localStorage.getItem('db_client'))??[];
const setLocalStorage = (dbClient) =>  localStorage.setItem('db_client', JSON.stringify(dbClient));

const deleteClient = (index) => {
  const dbClient = readClient()
  dbClient.splice(index, 1)
  setLocalStorage(dbClient)
}

const updateClient = (index, client) => {
  const dbClient = readClient()
  dbClient[index] = client
  setLocalStorage(dbClient)
}

const readClient = () => getLocaStorage()

// CRUD - CREATE
  const createClient = (client) => {
    const dbClient = getLocaStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
   
  }

// Interação com o Usuario.

const isValidFields = () => {
  return document.getElementById('form').reportValidity()
}


const clearFileds = () => {
  const fields = document.querySelectorAll('.modal-field')
  fields.forEach(field => field.value = "");
}

const saveClient = () => {
  if(isValidFields()) {
    const client = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cidade: document.getElementById('cidade').value,
    }
    const index = document.getElementById('nome').dataset.index
    if (index == 'new') {
      createClient(client);
      updateTable();
      closeModal();
    } else {
      updateClient(index, client)
      updateTable()
      closeModal()
    }
    
  }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.telefone}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `

    document.querySelector('#tbClient>tbody').appendChild(newRow)
}

const clearTable = () => {
  const rows = document.querySelectorAll('#tbClient>tbody tr')
  rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
  const dbClient = readClient()
  clearTable()
  dbClient.forEach(createRow)
}


const fillFields = (client) => {
  document.getElementById('nome').value = client.nome
  document.getElementById('email').value = client.email
  document.getElementById('telefone').value = client.telefone
  document.getElementById('cidade').value = client.cidade
  document.getElementById('nome').dataset.index = client.index
}

const editClient = (index) => {
  const client = readClient()[index]
  client.index = index
  fillFields(client)
  openModal()
}

const editDelete = (event) => {

  if (event.target.type == 'button') {

    const [action, index] = event.target.id.split('-')

    if (action == 'edit') {
      editClient(index);
    } else {
      const client = readClient()[index]
      const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`)
      if (response) {
        deleteClient(index)
        updateTable()
      }
    }
  }

}

updateTable();

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tbClient>tbody')
    .addEventListener('click', editDelete)