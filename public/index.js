/* Set the width of the side navigation to 250px */
function openNav(id) {
    document.getElementById(id).style.width = "300px";
}
  
/* Set the width of the side navigation to 0 */
function closeNav(id) {
    document.getElementById(id).style.width = "0";
}

/* Abrir e fechar o painel de questões */
function openQuestions() {
    document.getElementById("question-container").style.height = "20vh";
    // document.querySelector(".tela-quiz").style.marginBottom = "250px";
    document.querySelector(".tela-quiz").style.height = "80vh";
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
}

function dispensarMarcio() {
  marcio.addClass("d-none")
}

function chamarSupla() {
  supla.removeClass("d-none")
}

function dispensarSupla() {
  supla.addClass("d-none")
}