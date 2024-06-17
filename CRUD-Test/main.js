const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
  nome: "Maria",
  email: "maria@gmail.com",
  celular: "9879087986",
  cidade: "São Paulo"
}

  // CRUD - create read update delete

  const getLocaStorage = () => JSON.parse(localStorage.getItem('db_client'))??[];
  const setLocalStorage = (dbClient) =>  localStorage.setItem('db_client', JSON.stringify(dbClient));


// CRUD - CREATE
  const createClient = (client) => {
    const dbClient = getLocaStorage()
    dbClient.push(client)
    setLocalStorage(dbClient)
   
  }

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)