const main = document.getElementById("main")! as HTMLDivElement;
const conatiner = document.createElement("div")! as HTMLDivElement;
main.appendChild(conatiner);

conatiner.classList.add("box");
conatiner.classList.add("open-sans");

const greed = document.createElement("p")! as HTMLParagraphElement;
const btns = document.createElement("div")! as HTMLDivElement;
const regButton = document.createElement("button")! as HTMLButtonElement;
const logButton = document.createElement("button")! as HTMLButtonElement;

greed.innerText = `Welcome!`;

regButton.textContent = "Register";
regButton.classList.add("btn");

logButton.textContent = "Login";
logButton.classList.add("btn");

btns.className = "btns";
btns.append(logButton, regButton);
conatiner.append(greed, btns);

logButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/html-ts-css-project/login/login.html";
});
regButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/html-ts-css-project/registration/registration.html";
});
