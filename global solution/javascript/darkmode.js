
function alternarCorFundo() {
  var corAtual = document.body.style.backgroundColor;
  var novaCor = corAtual === "white" ? "black" : "white";
  document.body.style.backgroundColor = novaCor;
  document.body.style.color = novaCor === "black" ? "white" : "black";
}

document.querySelector("img").addEventListener("click", alternarCorFundo);
