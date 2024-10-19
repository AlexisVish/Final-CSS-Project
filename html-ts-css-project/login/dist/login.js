var log = document.createElement("form");
var loginContainer = document.getElementById("login-container");
var greet = document.createElement("p");
var mailInput = document.createElement("input");
var passwordInput = document.createElement("input");
var check = document.createElement("form");
var checkbox = document.createElement("input");
var label = document.createElement("label");
var loginButton = document.createElement("button");
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
function checkingData(mailInput, passwordInput) {
    try {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault();
            var mail = localStorage.getItem("mail");
            var password = localStorage.getItem("password");
            return mailInput.value === mail && passwordInput.value === password;
        });
    }
    catch (error) {
        console.error("No data was found");
    }
}
var result = checkingData(mailInput, passwordInput);
function login(result) {
    try {
        if (result === true) {
            window.location.href = "/html-ts-css-project/home/home.html";
        }
    }
    catch (error) {
        console.error("No answer from checking function");
    }
}
