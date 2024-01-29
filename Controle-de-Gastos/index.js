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

function login() {
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
    ).then(response => {
    window.location.href = "page/home/Home.html";
  }).catch(error => {
    alert(getErrorMessage(error));
  })
  // console.log('antes')
  // console.log('depois')
  // 
}

function getErrorMessage(error) {
  if (error.code == 'auth/invalid-credential') {
    return "Usuário não encontrado"
  } else {
    return error.message;
  }
}

function register() {
  window.location.href = "page/register/register.html";
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




function toggleEmailErrors() {
   const email = form.email().value;
   form.emailRequiredError().style.display = email ? "none" : "block";
  //  if (!email) {
  //   form.emailRequiredError().style.display = "block";
  //  } else {
  //   form.emailRequiredError().style.display = "none";
  //  }
    form.emailInValidError().style.display = validateEmail(email) ? "none" : "block";
  //  if (validateEmail(email)) {
  //   form.emailInValidError().style.display = "none";
  //  } else {
  //   form.emailInValidError().style.display = "block"
  //  }
}

function togglePasswordErros() {
  const password = form.password().value;

  form.passwordRequiredError().style.display = password ? "none" : "block";

  // if (!password) {
  //   form.passwordRequiredError().style.display = "block";
  // } else {
  //   form.passwordRequiredError().style.display = "none";
  // }
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