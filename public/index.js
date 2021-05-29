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