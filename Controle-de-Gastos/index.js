const emailValid = document.querySelector('.Input-email')
// console.log(emailValid.innerHTML)

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
    showLoading();
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
      hideLoading()
      window.location.href = "page/home/Home.html";
    }).catch(error => {
      hideLoading()
      alert(getErrorMessage(error))
    }) 
}

function getErrorMessage(error) {
  if (error.code == "auth/invalid-credential") {
    return "Usuário não encontrado"
  } 
    return error.message;
}

function register() {
  // showLoading();
  window.location.href = "page/register/register.html";
}

function recoverPassword() {
  showLoading(); 
  const email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      hideLoading();
      alert("Email enviado com sucesso.")
    }).catch((error) => {
      hideLoading();
      getErrorMessage(error)
    });
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";
  form.emailInValidError().style.display = validateEmail(email) ? "none" : "block";

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