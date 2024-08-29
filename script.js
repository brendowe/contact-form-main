const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const submit = document.getElementById("submit");

submit.addEventListener("click", verificarNomes);

function verificarNomes() {
  if (firstName.value == "" || lastName.value == "") {
    alert("Digite um nome");
  } else {
    alert("tudo ik");
  }
}
