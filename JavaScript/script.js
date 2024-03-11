
const form = document.querySelector("form");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#E-mail");
const phoneNumber = document.querySelector("#phone-number");
const password = document.querySelector("#Enter-password");


form.addEventListener("submit", formHandler);

function formHandler(e){

e.preventDefault();

  const formInfo = {
    fullName: fullName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    password: password.value

  }


console.log( formInfo);


}

