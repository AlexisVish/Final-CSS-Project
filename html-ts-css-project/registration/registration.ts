export class Student {
  name: string;
  phone: number;
  email: string;
  password: string;
  id:string;
  constructor(n: string, p: number, em: string, pass: string) {
    this.name = n;
    this.phone = p;
    this.email = em;
    this.password = pass;
    this.id = crypto.randomUUID();
  }
  pushUser(users: Student[]) {
    localStorage.setItem("users", JSON.stringify(users));
  }
}
export const users: Student[] = [];

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
nameInput.type = "text";
nameInput.classList.add("input");

phoneInput.placeholder = "Phone";
phoneInput.type = "tel";
phoneInput.classList.add("input");

mailInput.placeholder = "E-mail";
mailInput.type = "email";
mailInput.classList.add("input");

passInput.placeholder = "Password";
passInput.type = "password";
passInput.classList.add("input");

doublepass.placeholder = "Repeat the password";
doublepass.type = "password";
doublepass.classList.add("input");

nameInput.required = true;
phoneInput.required = true;
mailInput.required = true;
passInput.required = true;
doublepass.required = true;

regButton.textContent = "Register";
regButton.type = "submit";
regButton.classList.add("btn");

backButton.textContent = "Back to login";
backButton.type = "submit";
backButton.classList.add("btn");
backButton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "/html-ts-css-project/login/login.html";
});

btns.append(regButton, backButton);
form.append(nameInput, phoneInput, mailInput, passInput, doublepass);
container.append(reg, form, btns);

regButton.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    if (passInput.value !== doublepass.value) {
      alert("The passwords didn't match!");
      passInput.value = "";
      doublepass.value = "";
      return;
    } else {
      const phoneRegex = /^\d{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(mailInput.value)) {
        alert("Please enter a valid email address.");
      } 
      if (!phoneRegex.test(phoneInput.value)) {
        alert("Please enter a valid 10-digit phone number.");
      } else {
        const user = new Student(
          nameInput.value,
          phoneInput.valueAsNumber,
          mailInput.value,
          passInput.value
        );
        users.push(user);
        user.pushUser(users);
        nameInput.textContent="";
        phoneInput.textContent="";
        mailInput.textContent="";
        passInput.textContent="";
        doublepass.textContent="";
        window.location.href="/html-ts-css-project/home/home.html";
      }
    }
  } catch (error) {
    console.error("no events");
  }
});
