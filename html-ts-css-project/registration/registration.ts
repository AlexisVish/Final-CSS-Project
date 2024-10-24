class Student {
  photo?: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  id: string;
  courseID?: string[];
  constructor(n: string, p: string, em: string, pass: string) {
    this.name = n;
    this.phone = p;
    this.email = em;
    this.password = pass;
    this.id = "123";
  }
  pushUser(users: Student[]) {
    localStorage.setItem("users", JSON.stringify(users));
  }
}
const users: Student[] = [];

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
    if(nameInput.value === ""||
      phoneInput.value === ""||
      mailInput.value === ""||
      passInput.value === ""||
      doublepass.value === ""){
        alert("Please fill all the areas");
        return;

      }
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
        return;
      }
      if (!phoneRegex.test(phoneInput.value)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      } else {
        const user = new Student(
          nameInput.value,
          phoneInput.value,
          mailInput.value,
          passInput.value
        );
        users.push(user);
        user.pushUser(users);
        nameInput.textContent = "";
        phoneInput.textContent = "";
        mailInput.textContent = "";
        passInput.textContent = "";
        doublepass.textContent = "";
        window.location.href = "/html-ts-css-project/home/home.html";
      }
    }
  } catch (error) {
    console.error("no events");
  }
});
