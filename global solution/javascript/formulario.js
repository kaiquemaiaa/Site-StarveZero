
function validarFormulario() {
    var nome = document.forms["formulario"]["nome"].value;
    var segundoNome = document.forms["formulario"]["telefone"].value;
    var email = document.forms["formulario"]["email"].value;
  
    // Verifica se todos os campos estão preenchidos
    if (nome == "" || telefone == "" || email == "") {
      alert("Por favor, preencha todos os campos!");
      return false;
    }
  
  
  // Puxa os campos do HTML
  document.addEventListener("DOMContentLoaded", () => {
    const inputNome = document.getElementById("nome");
    const labelNome = document.querySelector("label[for='nome']");
    const inputSegundoNome = document.getElementById("telefone");
    const labelSegundoNome = document.querySelector("label[for='telefone']");
    const inputEmail = document.getElementById("email");
    const labelEmail = document.querySelector("label[for='email']");