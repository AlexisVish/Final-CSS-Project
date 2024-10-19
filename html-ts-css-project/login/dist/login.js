var log = document.createElement("log");
var loginContainer = document.getElementById("login-container");
loginContainer.appendChild(log);
log.className = 'log-box';
var greet = document.createElement("p");
var mailInput = document.createElement("mail");
var passwordInput = document.createElement("password");
var loginButton = document.createElement("button");
greet.innerText = "Login";
mailInput.placeholder = "enter your mail please";
mailInput.className = 'input';
passwordInput.placeholder = "enter your password please";
passwordInput.className = 'input';
loginButton.type = "submit";
loginButton.textContent = "Login";
loginButton.className = 'btn';
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
        console.error('No answer from checking function');
    }
}
