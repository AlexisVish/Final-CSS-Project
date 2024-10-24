"use strict";
exports.__esModule = true;
exports.passwordInput = exports.mailInput = void 0;
var log = document.createElement("form");
var loginContainer = document.getElementById("login-container");
var greet = document.createElement("p");
exports.mailInput = document.createElement("input");
exports.passwordInput = document.createElement("input");
var check = document.createElement("div");
var checkbox = document.createElement("input");
var label = document.createElement("label");
var loginButton = document.createElement("button");
greet.innerText = "Login";
greet.classList.add("h1");
exports.mailInput.type = "email";
exports.mailInput.placeholder = "Email";
exports.mailInput.classList.add("input");
exports.passwordInput.type = "password";
exports.passwordInput.placeholder = "Password";
exports.passwordInput.classList.add("input");
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
log.append(greet, exports.mailInput, exports.passwordInput, check, loginButton);
loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var user = users.find(function (u) { return u.email === exports.mailInput.value && u.password === exports.passwordInput.value; });
    if (user) {
        window.location.href = "/html-ts-css-project/home/home.html";
    }
    else {
        alert("Invalid e-mail or password!");
    }
});
