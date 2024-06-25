// Capura do formulário
const form = document.querySelector("#cadastro");
const btn_button = document.getElementById("btn-textn")

  let nome = document.getElementById("nome").value
  let tempo = document.getElementById("temp").value
  let mensalidade = document.getElementById("mens").value

    const selectedOption = this.options[this.selectedIndex];
    const value = selectedOption.value;
    const number = parseInt(value); // Convertendo para núme

  
  const url = "http://api.mathjs.org/v4/"

// Objeto que grava os dados para passar para API.
let dados = {
      nome: nome,
      tempo: number,
      mens: mensalidade
    }

// Varivel para facilitar o uso com o fecth.
const requestOptions = {
  method: 'POST', // Defininto o metodo como "POST"
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({"expr": "dados.mens * ((( 1 + 0.00517) ^ (dados.tempo * 12) - 1) / 0.00517)"})
};

console.log(dados.tempo)


const gravarDados = () => {
  const endpoint = url
  fetch(endpoint, requestOptions)
  .then(res => res.json())
  .then(ret => {
    console.log(ret)
  })
}

btn_button.addEventListener("click", (evet) => {
  evet.preventDefault();
  gravarDados()
})
