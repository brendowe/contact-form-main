const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const submit = document.getElementById("submit");

submit.addEventListener("click", chamar);

function chamar(event) {
  checkFirstName(event);
  checkLastName(event);
  checkEmail(event)
  checkMessage(event)
}

function checkFirstName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroFName");

  if (firstName.value == "") {
    erro.innerHTML = "This field is required";
  } else {
    erro.innerHTML = "certo";
  }
}

function checkLastName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroLName");
  if (lastName.value == "") {
    erro.innerHTML = "This field is required";
  } else {
    erro.innerHTML = "certo";
  }
}

function checkEmail(event) {
  event.preventDefault();
  const email = document.getElementById("email");
  let mail = email.value;
  let erro = document.getElementById("erroEmail");
  if (
    mail.includes("@gmail.com") &&
    mail.indexOf("@gmail.com") == mail.length - 10
  ) {
    erro.innerHTML = "certo";
  } else {
    erro.innerHTML = "Pleas enter a valid email address";
  }
}

function checkMessage(event) {
  event.preventDefault();
  const msg = document.getElementById('comment');
  let erro = document.getElementById('erroMsg');
  if (msg.value == '') {
    erro.innerHTML = "This field is required";
  } else if (msg.value.length < 10) {
    erro.innerHTML = "Digite uma mensagem maior.";
  } else {
    erro.innerHTML = "certo";
  }
}
