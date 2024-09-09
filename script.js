const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const msg = document.getElementById("comment");

const submit = document.getElementById("submit");

submit.addEventListener("click", chamar);

function chamar(event) {
  checkConsent(event);
  checkEmail(event);
  checkFirstName(event);
  checkLastName(event);
  checkMessage(event);
  checkRadio(event);

  if (
    checkConsent(event) &&
    checkEmail(event) &&
    checkFirstName(event) &&
    checkLastName(event) &&
    checkMessage(event) &&
    checkRadio(event)
  ) {
    
    const cliente = new criarPessoa(firstName.value, lastName.value, email.value, msg.value, consent.checked, queryType.value)

    console.log(cliente)
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    document.getElementById("comment").value = "";
    radio1.checked = false;
    radio2.checked = false;
    consent.checked = false;
    launchSend();
    setTimeout(removeSend, 2000);   
    
  }
}

function criarPessoa (firstName, lastName, email, msg, consent, queryType) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.email = email,
  this.msg = msg,
  this.consent = consent,
  this.queryType = queryType
}

function checkFirstName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroFName");

  if (firstName.value == "") {
    erro.innerHTML = "This field is required";
    firstName.style.border = "2px solid red";
    return false;
  } else {
    return true;
  }
}

function checkLastName(event) {
  event.preventDefault();
  let erro = document.getElementById("erroLName");
  if (lastName.value == "") {
    erro.innerHTML = "This field is required";
    lastName.style.border = "2px solid red";
    return false;
  } else {
    return true;
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
    return true;
  } else {
    erro.innerHTML = "Pleas enter a valid email address";
    email.style.border = "2px solid red";
    return false;
  }
}

function checkRadio(event) {
  event.preventDefault();
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  let erro = document.getElementById("erroRadio");

  if (radio1.checked == false && radio2.checked == false) {
    erro.innerHTML = "This field is required";
    return false;
  } else {
    return true;
  }
}

function checkConsent(event) {
  event.preventDefault();
  const consent = document.getElementById("consent");
  let erro = document.getElementById("erroConsent");

  if (consent.checked == true) {
    return true;
  } else {
    erro.innerHTML = "To submit this form, please consent to being contacted";
    return false;
  }
}

function checkMessage(event) {
  event.preventDefault();
  const msg = document.getElementById("comment");
  let erro = document.getElementById("erroMsg");
  if (msg.value == "") {
    erro.innerHTML = "This field is required";
    msg.style.border = "2px solid red";
    return false;
  } /*else if (msg.value.length < 10) {
    erro.innerHTML = "Digite uma mensagem maior.";
  }*/ else {
    return true;
  }
}

function launchSend() {
  const send = document.getElementById("send");
  send.style.display = "block";
}

function removeSend() {
  send.style.display = "none";
}
