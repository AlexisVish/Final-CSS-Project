var home = document.querySelector("#home");
var header = document.createElement("head");
var navBar = document.createElement("div");
var body = document.createElement("div");
home.append(navBar, header, body);
home.classList.add("container");
navBar.innerHTML = "\n  <div class=\"nav-bar\">\n        <button class=\"open-sans nav-bar__account btn\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"open-sans nav-bar__courses btn\">My Courses</button>\n        <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n        <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n        <button class=\"open-sans nav-bar__lessons btn\">My Lessons</button>\n    </div>\n\n   \n   ";
header.innerHTML = "\n   <div class=\"search-container open-sans\">\n        <input type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\" class=\"open-sans\">Search</button>\n    </div>\n   ";
function onMyAccountClick() {
    window.location.href = "/html-ts-css-project/registration/registration.html";
}
// const input = document.querySelector(".text")! as HTMLInputElement;
// input.addEventListener("input", () => {
//     setTimeout(() => {
//         console.log(input.value);
//     }, 2000);
// });
