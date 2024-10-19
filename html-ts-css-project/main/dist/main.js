var main = document.getElementById("main");
var conatiner = document.createElement("div");
main.appendChild(conatiner);
conatiner.classList.add('log-box');
conatiner.classList.add('open-sans');
var greed = document.createElement("p");
var btns = document.createElement("div");
var regButton = document.createElement("button");
var logButton = document.createElement("button");
greed.innerText = "Welcome!";
regButton.textContent = "Register";
regButton.classList.add('btn');
logButton.textContent = "Login";
logButton.classList.add('btn');
btns.className = "btns";
btns.append(logButton, regButton);
conatiner.append(greed, btns);
logButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "/html-ts-css-project/login/login.html";
});
regButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "/html-ts-css-project/registration/registration.html";
});
