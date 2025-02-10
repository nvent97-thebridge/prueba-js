const inputPass = document.getElementById("inputPass");
const passInfo = document.getElementById("passInfo");
const loginBtn = document.getElementById("loginButton");

function checkPass() {
  let msg = "";
  const passLen = inputPass.value.length;
  loginBtn.setAttribute("disabled", "true")
  if (passLen < 8) {
    msg = "La contraseña es demasiado corta";
    passInfo.setAttribute("class", "corta");
  }
  if (passLen >= 8 && passLen < 10) {
    msg = "La contraseña no es del todo segura";
    passInfo.setAttribute("class", "intermedia");
  }
  if (passLen >= 10) {
    msg = "La contraseña es segura";
    passInfo.setAttribute("class", "bien");
    loginBtn.removeAttribute("disabled")
  }
  passInfo.innerText = msg;
}

function login(){
  const inputUser = document.getElementById("inputUser");
  alert("Login " + inputUser.value)
}

inputPass.addEventListener("keyup", checkPass);
loginBtn.addEventListener("click", login);
