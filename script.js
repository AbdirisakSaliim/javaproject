// DOM Elements
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let result = document.getElementById("result");
let users = [];
//Event
loginBtn.addEventListener("click", function () {
  emailError.innerText = "";
  passError.innerText = "";
  result.innerText = "";

  let emailValue = email.value.trim();
  let passValue = password.value.trim();
  if (emailValue === "") {
    emailError.innerText = " Email is required";
    return;
  }
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    emailError.innerText = " Email format is not correct";
    return;
  }
  if (passValue === "") {
    passError.innerText = " Password is required";
    return;
  }
  let strongPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!strongPassword.test(passValue)) {
    passError.innerText =
      "Password must be 8+ chars, Capital, Small, Number & Symbol";
    return;
  }
  users.push({
    email: emailValue,
    password: passValue
  });
  result.innerText = " Login Successful";
  result.style.color = "green";
  email.value = "";
  password.value = "";
});
