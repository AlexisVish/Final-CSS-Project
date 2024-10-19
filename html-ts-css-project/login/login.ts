const log = document.createElement("form") as HTMLFormElement;

const loginContainer = document.getElementById(
  "login-container"
)! as HTMLDivElement;

const greet = document.createElement("p")! as HTMLParagraphElement;
const mailInput = document.createElement("input")! as HTMLInputElement;
const passwordInput = document.createElement("input")! as HTMLInputElement;
const check = document.createElement("div")! as HTMLDivElement;
const checkbox = document.createElement("input") as HTMLInputElement;
const label = document.createElement("label")! as HTMLLabelElement;
const loginButton = document.createElement("button")! as HTMLButtonElement;

greet.innerText = "Login";
greet.classList.add("h1");

mailInput.type = "email";
mailInput.placeholder = "Email";
mailInput.classList.add("input");

passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.classList.add("input");

checkbox.type = "checkbox";
checkbox.id = "rememberMe";
label.htmlFor = checkbox.id;
label.innerText = "Remember Me!";
label.classList.add("smaller");

check.classList.add("login-container");
check.append(checkbox, label);

loginButton.type = "submit";
loginButton.textContent = "Submit";
loginButton.className = "btn";

loginContainer.appendChild(log);
log.className = "log-box";
loginContainer.classList.add("open-sans");
log.append(greet, mailInput, passwordInput, check, loginButton);

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem("users") || "[]") as Student[]; // Get all users
  const user = users.find(
    (u) => u.email === mailInput.value && u.password === passwordInput.value
  );

  if (user) {
    window.location.href = "/html-ts-css-project/home/home.html";
  }
 else{
  alert("Invalid e-mail or password!");
 }
});
