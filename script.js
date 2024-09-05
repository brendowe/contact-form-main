const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

const submit = document.getElementById("submit");

submit.addEventListener("click", chamar);

function chamar(event) {
  checkFirstName(event);
  checkLastName(event);
  checkEmail(event);
  checkMessage(event);
  checkConsent(event);
  checkRadio(event)
}

function checkFirstName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroFName");

  if (firstName.value == "") {
    erro.innerHTML = "This field is required";
    firstName.style.border = '2px solid red';
  } else {
    erro.innerHTML = "certo";
  }
}

function checkLastName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroLName");
  if (lastName.value == "") {
    erro.innerHTML = "This field is required";
    lastName.style.border = '2px solid red';
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
    email.style.border = '2px solid red';
  }
}

function checkRadio(event) {
  event.preventDefault();
  const radio1 = document.getElementById('radio1');
  const radio2 = document.getElementById('radio2');
  let erro = document.getElementById('erroRadio');

  if(radio1.checked == false && radio2.checked == false) {
    erro.innerHTML = 'This field is required';
  } else {
    erro.innerHTML = 'Foi';
  }

}

function checkConsent(event) {
  event.preventDefault();
  const consent = document.getElementById('consent');
  let erro = document.getElementById('erroConsent');

  if(consent.checked == true) {
    erro.innerHTML = 'Foi';
  } else {
    erro.innerHTML = 'To submit this form, please consent to being contacted';
  }

}

function checkMessage(event) {
  event.preventDefault();
  const msg = document.getElementById('comment');
  let erro = document.getElementById('erroMsg');
  if (msg.value == '') {
    erro.innerHTML = "This field is required";
    msg.style.border = '2px solid red';
  } else if (msg.value.length < 10) {
    erro.innerHTML = "Digite uma mensagem maior.";
  } else {
    erro.innerHTML = "certo";
  }
}
