class Student {
  name: string;
  phone: number;
  email: string;
  password: string;
  constructor(n: string, p: number, em: string, pass: string) {
    this.name = n;
    this.phone = p;
    this.email = em;
    this.password = pass;
  }
  getUser() {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

const container = document.getElementById(
  "registration-container"
) as HTMLDivElement;
container.classList.add("box");
container.classList.add("open-sans");

const reg = document.createElement("p")! as HTMLParagraphElement;
const form = document.createElement("form")! as HTMLFormElement;
const nameInput = document.createElement("input")! as HTMLInputElement;
const phoneInput = document.createElement("input")! as HTMLInputElement;
const mailInput = document.createElement("input")! as HTMLInputElement;
const passInput = document.createElement("input")! as HTMLInputElement;
const doublepass = document.createElement("input")! as HTMLInputElement;
const btns = document.createElement("div")! as HTMLDivElement;
const regButton = document.createElement("button")! as HTMLButtonElement;
const backButton = document.createElement("button")! as HTMLButtonElement;

reg.innerText = "Register!";
reg.classList.add("h1");

nameInput.placeholder = "Name";
nameInput.type = "name";
nameInput.classList.add("input");

phoneInput.placeholder = "Phone";
phoneInput.type = "phone";
phoneInput.classList.add("input");

mailInput.placeholder = "E-mail";
mailInput.type = "mail";
mailInput.classList.add("input");

passInput.placeholder = "Password";
passInput.type = "password";
passInput.classList.add("input");

doublepass.placeholder = "Repeat the password";
doublepass.type = "password";
doublepass.classList.add("input");

regButton.textContent = "Register";
regButton.classList.add("btn");

backButton.textContent = "Back to login";
backButton.classList.add("btn");
backButton.addEventListener('click',(event)=>{
    event.preventDefault();
    window.location.href="/html-ts-css-project/login/login.html"
})

btns.append(regButton, backButton);
form.append(nameInput, phoneInput, mailInput, passInput, doublepass);
container.append(reg, form, btns);

const users: Student[] = [];
const user = new Student(
  nameInput.value,
  phoneInput.valueAsNumber,
  mailInput.value,
  passInput.value
);
users.push(user);
