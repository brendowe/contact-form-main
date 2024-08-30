const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");


const submit = document.getElementById("submit");

submit.addEventListener("click", checkLastName);

function checkFirstName() {
  if (firstName.value == "") {
    let erro = document.getElementById('erroFName');
    erro.innerHTML = 'oi';
  } else {
    erro.innerHTML = 'dfdfd';
  }
}

function checkLastName(event) {
  event.preventDefault()
  if (lastName.value == "") {
    let erro = document.getElementById('erroLName');
    erro.innerHTML = 'oi';
  } else {
    erro.innerHTML = 'dfdfd';
  }
  
}

function checkEmail() {
  const email = document.getElementById('email');
  let mail = email.value;
  if(mail.includes('@gmail.com') && mail.indexOf('@gmail.com') == mail.length - 10) {
    alert('foi')
    let 
  } else {
    alert('sddsd')
  }
}