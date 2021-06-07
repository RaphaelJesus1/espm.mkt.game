/* Abrir e fechar o painel de questões */
function openQuestions() {
    document.getElementById("question-container").style.height = "15vh";
    // document.querySelector(".tela-quiz").style.marginBottom = "250px";
    document.querySelector(".tela-quiz").style.height = "85vh";
  }
  
  function closeQuestions() {
    document.getElementById("question-container").style.height = "0";
    // document.querySelector(".tela-quiz").style.marginBottom = "0";
    document.querySelector(".tela-quiz").style.height = "100vh";
  }

  function mudarBg(novoBg) {
    if(!novoBg.startsWith("bg-")) { // Se não vier como classe css
        novoBg = novoBg.toLowerCase().replace(/^/, "bg-")
    }
    // assíncrono
    $.when(containerBg.fadeOut(800))
        .then(function() {
            containerBg.removeClass()
            containerBg.addClass(novoBg)
        }, () => {})
        .then(function() {containerBg.fadeIn(800)}, () => {})
}

function chamarMarcio() {
  marcio.removeClass("d-none")
  console.log("marcio normal chamado")
  marcio.addClass("animate-chegar")
  setTimeout(function() {marcio.removeClass("animate-chegar")}, 2100) // remover a classe dps de acabar o efeito
  // pra não conflitar com a animação de saída mais tarde.
}

function dispensarMarcio() {
  marcio.addClass("animate-sair")
  setTimeout(function() {marcio.addClass("d-none"); marcio.removeClass("animate-sair");}, 2100)
}

function chamarMarcioBoladao() {
  marcioBoladao.removeClass("d-none")
  marcioBoladao.addClass("animate-chegar")
  setTimeout(function() {marcioBoladao.removeClass("animate-chegar")}, 2100) // remover a classe dps de acabar o efeito
  // pra não conflitar com a animação de saída mais tarde.
}

function dispensarMarcioBoladao() {
  marcioBoladao.addClass("animate-sair")
  setTimeout(function() {marcioBoladao.addClass("d-none"); marcioBoladao.removeClass("animate-sair");}, 2100)
}

function chamarMarcioFelizao() {
  marcioBoladao.removeClass("d-none")
  marcioBoladao.addClass("animate-chegar")
  setTimeout(function() {marcioBoladao.removeClass("animate-chegar")}, 2100) // remover a classe dps de acabar o efeito
  // pra não conflitar com a animação de saída mais tarde.
}

function dispensarMarcioFelizao() {
  marcioFelizao.addClass("animate-sair")
  setTimeout(function() {marcioFelizao.addClass("d-none"); marcioFelizao.removeClass("animate-sair");}, 2100)
}

function chamarSupla() {
  supla.removeClass("d-none")
  supla.addClass("animate-chegar")
  setTimeout(function() {supla.removeClass("animate-chegar")}, 2100)
}

function dispensarSupla() {
  supla.addClass("animate-sair")
  setTimeout(function() {supla.addClass("d-none"); supla.removeClass("animate-sair");}, 2100)
}

function animacaoMudarDia() {
  containerDaycicle.fadeIn(800)
  containerText.fadeOut(300)
  setTimeout(function(){ containerDaycicle.fadeOut(800);containerText.fadeIn(800)}, 3000)
}