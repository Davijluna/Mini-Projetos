const form = document.querySelector("#cadastro");

async function cadastroForm(event) {
  event.preventDefault();
  
  const url = 'http://api.mathjs.org/v4/';
  
  let nome = document.getElementById("nome").value
  let mensalidade = document.getElementById("mens").value
  let tempoContribuicao = document.getElementById("temp").value
  
  console.log(nome);
  console.log(mensalidade);
  console.log(tempoContribuicao);
  
  let data = {
    nome: nome,
    mensalidade: mensalidade,
    tempoContribuicao: tempoContribuicao
  };
  
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"}
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("Error:000000", response.statusText);
  }
}

form.addEventListener('submit', cadastroForm);
