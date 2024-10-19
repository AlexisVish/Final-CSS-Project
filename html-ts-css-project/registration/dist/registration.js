var Student = /** @class */ (function () {
    function Student(n, p, em, pass) {
        this.name = n;
        this.phone = p;
        this.email = em;
        this.password = pass;
    }
    Student.prototype.getUser = function () {
        localStorage.setItem("user", JSON.stringify(users));
    };
    return Student;
}());
var container = document.getElementById("registration-container");
container.classList.add("box");
container.classList.add("open-sans");
var reg = document.createElement("p");
var form = document.createElement("form");
var nameInput = document.createElement("input");
var phoneInput = document.createElement("input");
var mailInput = document.createElement("input");
var passInput = document.createElement("input");
var doublepass = document.createElement("input");
var btns = document.createElement("div");
var regButton = document.createElement("button");
var backButton = document.createElement("button");
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
regButton.type = "submit";
regButton.classList.add("btn");
backButton.textContent = "Back to login";
backButton.type = "submit";
backButton.classList.add("btn");
backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "/html-ts-css-project/login/login.html";
});
btns.append(regButton, backButton);
form.append(nameInput, phoneInput, mailInput, passInput, doublepass);
container.append(reg, form, btns);
var users = [];
regButton.addEventListener('click', function (event) {
    event.preventDefault();
    try {
        if (passInput.value === doublepass.value) {
            var user = new Student(nameInput.value, phoneInput.valueAsNumber, mailInput.value, passInput.value);
            users.push(user);
        }
        else {
            alert("The passwords didn't match!");
            passInput.value = "";
            doublepass.value = "";
        }
    }
    catch (error) {
        console.error('no events');
    }
});
