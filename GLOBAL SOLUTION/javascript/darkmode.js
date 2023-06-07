
function alternarCorFundo() {
  var corAtual = document.body.style.backgroundColor; // Obtém a cor de fundo atual
  var novaCor = corAtual === "purple" ? "white" : "purple"; // Alterna entre roxo e branco
  document.body.style.backgroundColor = novaCor; // Define a nova cor de fundo

  // Altera a cor do texto para amarelo se a cor de fundo for roxa, caso contrário, volta para a cor preta
  document.body.style.color = novaCor === "purple" ? "white" : "black";
}

// Seleciona a imagem por meio do seletor de tag "img" e adiciona o evento de clique
document.querySelector("img").addEventListener("click", alternarCorFundo);