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
head.innerHTML = "  <div class=\"search-container open-sans\">\n        <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\" class=\"open-sans sr\" onClick=\"onSearchClick()\">Look Up!</button>\n    </div>\n    <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\">\n\n";
function onSearchClick() {
    var searchInput = document.getElementById("search-bar");
    var search = searchInput.value;
    alert("You searched for " + search);
    searchInput.value = "";
}
nav.innerHTML = "  <div class=\"nav-bar\">\n        <button class=\"open-sans nav-bar__account btn\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"open-sans nav-bar__courses btn\">My Courses</button>\n        <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n        <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n        <button class=\"open-sans nav-bar__lessons btn\">My Lessons</button>\n        \n    </div>\n";
studentDetails.innerHTML = "\n\n    <img src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n     <div class=\"data\">\n        <div class=\"details\">\n            <h1>User Name: <span id=\"userName\">" + userDetails.name + "</span></h1>\n            <h2>User Phone: <span id=\"userName\">" + userDetails.name + "</span></h2>\n            <h2>User Id: <span id=\"userName\">" + userDetails.name + "</span></h2>\n        </div>\n    <button class=\"btn\" onClick=\"onEditClick()\">Edit</button></div>\n    \n";
var userDetailsString = localStorage.getItem("user");
var userDetails = userDetailsString
    ? JSON.parse(userDetailsString)
    : null;
function onEditClick() {
    var userName = document.getElementById("userName");
    userName.innerHTML = "<input type=\"text\" id=\"editName\" value=\"" + userName.innerText + "\">";
}
//    function onMyAccountClick() {
//        window.location.href = "/html-ts-css-project/registration/registration.html";
//     }
//     // const input = document.querySelector(".text")! as HTMLInputElement;
//     // input.addEventListener("input", () => {
//     //     setTimeout(() => {
//     //         console.log(input.value);
//     //     }, 2000);
//     // });
