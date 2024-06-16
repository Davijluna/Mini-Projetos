'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
  nome: "Paulo",
  email: "paulo@gmail.com",
  celular: "1112345678",
  cidade: "São Paulo"
}

  // CRUD - create read update delete

  // localStorage.setItem("db_client", JSON.stringify([]))

  const createClient = (client) => {
    const db_client =  JSON.parse(localStorage.getItem("db_client"))

    if (!db_client) {
      db_client = [];
    }
    
    console.log(db_client)
    db_client.push(client)
    localStorage.setItem("db_client",JSON.stringify(db_client))
  }
//  createClient(tempClient)
// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)