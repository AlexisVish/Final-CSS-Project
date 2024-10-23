var home = document.querySelector("#home");
var header = document.createElement("header");
var navBar = document.createElement("div");
home.appendChild(navBar);
home.appendChild(header);
navBar.innerHTML = "\n  <div class=\"nav-bar box\">\n        <button class=\"nav-bar-account\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"nav-bar-courses\">My Courses</button>\n        <button class=\"nav-bar-zoom\">My Zoom Meetings</button>\n        <button class=\"nav-bar-forums\">My Forums</button>\n        <button class=\"nav-bar-lessons\">My Lessons</button>\n    </div>\n\n   \n   ";
header.innerHTML = "\n   <div class=\"search-container\">\n        <input type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\">Search</button>\n    </div>\n   ";
function onMyAccountClick() {
    window.location.href = "/html-ts-css-project/registration/registration.html";
}
// const input = document.querySelector(".text")! as HTMLInputElement;
// input.addEventListener("input", () => {
//     setTimeout(() => {
//         console.log(input.value);
//     }, 2000);
// });
