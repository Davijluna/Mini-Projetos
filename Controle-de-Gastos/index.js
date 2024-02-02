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
  showLoading();
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
    ).then(() => {
      hideLoading()
    window.location.href = "page/home/Home.html";
  }).catch((error) => {
      hideLoading();
    getErrorMessage(error);
  })
  // console.log('antes')
  // console.log('depois')
  // 
  // ! corrigir bug de recuperação de senha
   // ! corrigir bug de recuperação de senha
}



function register() {
  // showLoading();
  window.location.href = "page/register/register.html";
}

function recoverPassword() {
    showLoading();

  firebase.auth().sendPasswordResetEmail(form.email().value).then(() => {
    hideLoading();
    alert("Email enviado com sucesso");
  }).catch((error) => {
    hideLoading();
    const errorMessage = getErrorMessage(error);
    if (errorMessage === "Usuário não encontrado") {
      alert("O usuário associado a este e-mail não foi encontrado."); // !solução do chatGPT mas não resolveu.
    } else {
      alert(errorMessage)
    }
  });
}

function getErrorMessage(error) {
  if (error.code == "auth/user-not-found") {
    return "Usuário não encontrado"
  } 
    return error.message;
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