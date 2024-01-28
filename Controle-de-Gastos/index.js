const emailValid = document.querySelector('.Input-email')
console.log(emailValid.innerHTML)

function onChangPassword() {
  toggleButtonsDisable();
  togglePasswordErros();
}

function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors();
  //  ! togglePasswordErros() "foi removido "
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function isPasswordValid() {
  const password = form.password().value;
  if(!password) {
    return false;
  }
  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}


function toggleEmailErrors() {
   const email = form.email().value;
   if (!email) {
    form.emailRequiredError().style.display = "block";
   } else {
    form.emailRequiredError().style.display = "none";
   }

   if (validateEmail(email)) {
    form.emailInValidError().style.display = "none";
   } else {
    form.emailInValidError().style.display = "block"
   }
}

function togglePasswordErros() {
  const password = form.password().value;
  if (!password) {
    form.passwordRequiredError().style.display = "block";
  } else {
    form.passwordRequiredError().style.display = "none";
  }
 }

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;
}

const form = {
  email: () => document.getElementById('email'),
  emailInValidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  loginButton: () => document.getElementById('login-button'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () => document.getElementById('recover-password-button'),
}