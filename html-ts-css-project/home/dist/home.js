localStorage.setItem("user", JSON.stringify({ name: "Alexis", phone: "0538999886", courses: [] }));
var home = document.querySelector("#home");
var head = document.createElement("div");
var data = document.createElement("div");
var nav = document.createElement("navbar");
var studentDetails = document.createElement("div");
data.append(nav, studentDetails);
home.append(head, data);
head.classList.add("head");
nav.classList.add("nav-bar");
studentDetails.classList.add("details-container");
data.classList.add("body-container");
home.classList.add("container");
function renderHeader() {
    head.innerHTML = "  <div class=\"search-container open-sans\">\n        <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\" class=\"open-sans sr\" onClick=\"onSearchClick()\">Look Up!</button>\n    </div>\n    <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\">\n\n";
}
renderHeader();
function renderNavBar() {
    nav.innerHTML = "  <div class=\"nav-bar\">\n        <button class=\"open-sans nav-bar__account btn\" onClick=\"OnAccountClick()\">My Account</button>\n        <button class=\"open-sans nav-bar__courses btn\" onClick=\"OnCoursesClick()\">My Courses</button>\n        <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n        <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n        <button class=\"open-sans nav-bar__lessons btn\" onClick=\"onMyExitClick()\">Exit</button>\n        \n    </div>\n";
}
renderNavBar();
function OnAccountClick() {
    window.location.href = "../home/home.html";
}
function OnCoursesClick() {
    window.location.href = "../courses/courses.html";
}
function onSearchClick() {
    var searchInput = document.getElementById("search-bar");
    var search = searchInput.value;
    alert("You searched for " + search);
    searchInput.value = "";
}
function onMyExitClick() {
    window.location.href = "../login/login.html";
}
var userDetailsString = localStorage.getItem("user");
var userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};
studentDetails.innerHTML = "\n\n    <img class=\"userPhoto\" src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n     <div class=\"data\">\n        <div class=\"details\">\n            <h1>User Name: <span id=\"userName\">" + userDetails.name + "</span></h1>\n            <h2>User Phone: <span id=\"userPhone\">" + userDetails.phone + "</span></h2>\n            \n            <h2>User Id: <span id=\"userName\">123</span></h2>\n        </div>\n    <button id=\"B\" class=\"btn\" onClick=\"onEditClick()\">Edit</button></div>\n    \n";
function onEditClick() {
    var userName = document.querySelector("#userName");
    userName.innerHTML = "<input type=\"text\" id=\"editName\" class=\"input\" placeholder=\"Enter a Name\" value=\"" + userName.innerText + "\">";
    var userPhone = document.querySelector("#userPhone");
    userPhone.innerHTML = "<input type=\"text\" id=\"editPhone\" class=\"input\" placeholder=\"Enter a Phone number\" value=\"" + userPhone.innerText + "\">";
    var editButton = document.querySelector("#B");
    editButton.style.display = "none";
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.type = "button";
    saveButton.classList.add("btn");
    var details = document.querySelector(".details");
    details.append(saveButton);
    var newName = document.querySelector("#editName");
    newName.value = "" + userDetails.name;
    var newPhone = document.querySelector("#editPhone");
    newPhone.value = "" + userDetails.phone;
    var exitButton = document.createElement("button");
    exitButton.textContent = "Exit";
    exitButton.type = "button";
    exitButton.classList.add("btn");
    details.append(exitButton);
    exitButton.addEventListener("click", function (event) {
        event.preventDefault();
        saveButton.style.display = "none";
        exitButton.style.display = "none";
        editButton.style.display = "block";
        userName.innerHTML = "" + userDetails.name;
        userPhone.innerHTML = "" + userDetails.phone;
    });
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (newName.value === "" || newPhone.value === "") {
            alert("No changes were made!");
            return;
        }
        else if (newName.value || newPhone.value) {
            var phoneRegex = /^\d{10}$/;
            if (phoneRegex.test(newPhone.value)) {
                saveButton.style.display = "none";
                exitButton.style.display = "none";
                userPhone.innerHTML = "" + newPhone.value;
                userName.innerHTML = "" + newName.value;
                editButton.style.display = "block";
                var userDetailsString_1 = localStorage.getItem("user");
                var userDetails_1 = userDetailsString_1 ? JSON.parse(userDetailsString_1) : {};
                userDetails_1.name = newName.value.trim();
                userDetails_1.phone = newPhone.value.trim();
                localStorage.setItem("user", JSON.stringify(userDetails_1));
            }
            else {
                alert("Invalid number!");
                return;
            }
        }
    });
}
