
function atualizarDataHora() {
    // Cria um novo objeto Date
    var dataHoraAtual = new Date();
  
    // Obtém os componentes da data e da hora
    var dia = dataHoraAtual.getDate();
    var mes = dataHoraAtual.getMonth() + 1; // Os meses em JavaScript são baseados em zero
    var ano = dataHoraAtual.getFullYear();
    var hora = dataHoraAtual.getHours();
    var minutos = dataHoraAtual.getMinutes();
    var segundos = dataHoraAtual.getSeconds();
  
    // Formata a data e a hora no formato desejado (exemplo: "DD/MM/AAAA HH:MM:SS")
    var dataHoraFormatada = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + minutos + ':' + segundos;
  
    // Atualiza o elemento HTML com a data e a hora
    document.getElementById('data-hora').textContent = dataHoraFormatada;
  }
  
  // Chama a função inicialmente para exibir a data e a hora
  atualizarDataHora();
  
  // Atualiza a data e a hora a cada segundo
  setInterval(atualizarDataHora, 1000);