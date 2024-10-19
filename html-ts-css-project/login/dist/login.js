var log = document.createElement("log");
var loginContainer = document.getElementById("login-container");
var greet = document.createElement("p");
var mailInput = document.createElement("mail");
var passwordInput = document.createElement("password");
var loginButton = document.createElement("button");
greet.innerText = "Login";
greet.classList.add("h1");
mailInput.type = "email";
mailInput.placeholder = "Email";
mailInput.classList.add("input");
passwordInput.type = "password";
passwordInput.placeholder = "Passsword";
passwordInput.classList.add("input");
loginButton.type = "submit";
loginButton.textContent = "Login";
loginButton.className = "btn";
loginContainer.appendChild(log);
log.className = "log-box";
loginContainer.classList.add("open-sans");
log.append(greet, mailInput, passwordInput, loginButton);
function checkingData(mailInput, passwordInput) {
    try {
        loginButton.addEventListener("click", function (event) {
            if (mailInput.value === localStorage.getItem(mail.value) &&
                passwordInput.value === localStorage.getItem(password.value)) {
                return true;
            }
        });
    }
    catch (error) {
        console.error("No data was found");
    }
}
function login(checkingData) {
    try {
        if (checkingData === true) {
        }
    }
    catch (error) {
        console.error("No answer from checking function");
    }
}
