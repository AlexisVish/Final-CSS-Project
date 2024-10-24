var Student = /** @class */ (function () {
    function Student(n, p, em, pass) {
        this.name = n;
        this.phone = p;
        this.email = em;
        this.password = pass;
        this.id = crypto.randomUUID();
    }
    Student.prototype.pushUser = function (users) {
        localStorage.setItem("users", JSON.stringify(users));
    };
    return Student;
}());
var users = [];
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
backButton.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "/html-ts-css-project/login/login.html";
});
btns.append(regButton, backButton);
form.append(nameInput, phoneInput, mailInput, passInput, doublepass);
container.append(reg, form, btns);
regButton.addEventListener("click", function (event) {
    event.preventDefault();
    try {
        if (nameInput.value === "" ||
            phoneInput.value === "" ||
            mailInput.value === "" ||
            passInput.value === "" ||
            doublepass.value === "") {
            alert("Please fill all the areas");
            return;
        }
        if (passInput.value !== doublepass.value) {
            alert("The passwords didn't match!");
            passInput.value = "";
            doublepass.value = "";
            return;
        }
        else {
            var phoneRegex = /^\d{10}$/;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(mailInput.value)) {
                alert("Please enter a valid email address.");
                return;
            }
            if (!phoneRegex.test(phoneInput.value)) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }
            else {
                var user = new Student(nameInput.value, phoneInput.value, mailInput.value, passInput.value);
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
    }
    catch (error) {
        console.error("no events");
    }
});
