const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const loginFormData = new FormData(loginForm);

  const name = loginFormData.get("astronautName");
  const email = loginFormData.get("astronautEmail");
  const password = loginFormData.get("astronautPassword");
  console.log(loginFormData, name, email, password);
});
