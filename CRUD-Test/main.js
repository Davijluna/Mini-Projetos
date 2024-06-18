const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
  nome: "Cleyde",
  email: "cleyde@gmail.com",
  celular: "98798663",
  cidade: "Macapá"
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

const saveClient = () => {
  if(isValidFields()) {
    const client = {
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cidade: document.getElementById('cidade').value,
    }
    createClient(client);
    console.log("cadastrando cliente")
  }
}

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)