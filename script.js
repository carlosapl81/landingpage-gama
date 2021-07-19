const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let leads = { nome,email, }
 
  let convertLeads = JSON.stringify(leads);

  localStorage.setItem('lead', convertLeads)

  let content = document.getElementById('content')
  
})

function atualizacao() {
   var texto1 = document.getElementById("form");

   texto1.innerText = "Só aguardar o cupom!";
}
