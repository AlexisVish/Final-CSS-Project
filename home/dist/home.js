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
    head.innerHTML = "\n        <div class=\"search-container open-sans\">\n            <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n            <button id=\"search-button\" class=\"open-sans sr\" onClick=\"onSearchClick()\">Look Up!</button>\n        </div>\n        <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\" onClick=\"onImageClick()\">\n    ";
}
renderHeader();
function onImageClick() {
    window.location.href = "https://www.harvard.edu/";
}
function renderNavBar() {
    nav.innerHTML = "\n        <div class=\"nav-bar\">\n            <button class=\"open-sans nav-bar__account btn\" onClick=\"OnAccountClick()\">My Account</button>\n            <button class=\"open-sans nav-bar__courses btn\" onClick=\"OnCoursesClick()\">My Courses</button>\n            <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n            <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n            <button class=\"open-sans nav-bar__lessons btn\" onClick=\"onMyExitClick()\">Exit</button>\n        </div>\n    ";
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
var userDetailsString = localStorage.getItem("users");
var users = userDetailsString ? JSON.parse(userDetailsString) : [];
var userIdx = users.length ? users[users.length - 1] : null;
if (userIdx) {
    studentDetails.innerHTML = "\n        <img class=\"userPhoto\" src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n        <div class=\"data\">\n            <div class=\"details\">\n                <h1>User Name: <span id=\"userName\">" + userIdx.name + "</span></h1>\n                <h2>User Phone: <span id=\"userPhone\">" + userIdx.phone + "</span></h2>\n                <h2>User Id: <span id=\"userId\">123</span></h2>\n            </div>\n            <button id=\"B\" class=\"btn\" onClick=\"onEditClick()\">Edit</button>\n        </div>\n    ";
}
else {
    studentDetails.innerHTML = "<p>No user found.</p>";
}
function onEditClick() {
    var userName = document.querySelector("#userName");
    var userPhone = document.querySelector("#userPhone");
    var editButton = document.querySelector("#B");
    userName.innerHTML = "<input type=\"text\" id=\"editName\" class=\"input\" placeholder=\"Enter a Name\" value=\"" + userName.innerText + "\">";
    userPhone.innerHTML = "<input type=\"text\" id=\"editPhone\" class=\"input\" placeholder=\"Enter a Phone number\" value=\"" + userPhone.innerText + "\">";
    editButton.style.display = "none";
    var saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.type = "button";
    saveButton.classList.add("btn");
    var details = document.querySelector(".details");
    details.append(saveButton);
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
        userName.innerHTML = "" + userIdx.name;
        userPhone.innerHTML = "" + userIdx.phone;
    });
    saveButton.addEventListener("click", function (event) {
        event.preventDefault();
        var newName = document.getElementById("editName").value;
        var newPhone = document.getElementById("editPhone").value;
        if (newName === "" || newPhone === "") {
            alert("No changes were made!");
            return;
        }
        else {
            var phoneRegex = /^\d{10}$/;
            if (phoneRegex.test(newPhone)) {
                userIdx.name = newName.trim();
                userIdx.phone = newPhone.trim();
                localStorage.setItem("users", JSON.stringify(users));
                userName.innerHTML = "" + userIdx.name;
                userPhone.innerHTML = "" + userIdx.phone;
                editButton.style.display = "block";
                saveButton.style.display = "none";
                exitButton.style.display = "none";
            }
            else {
                alert("Invalid number!");
                return;
            }
        }
    });
}
