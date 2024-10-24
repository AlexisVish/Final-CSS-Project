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
head.innerHTML = "  <div class=\"search-container open-sans\">\n        <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\" class=\"open-sans sr\">Search</button>\n    </div>\n    <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\">\n\n";
nav.innerHTML = "  <div class=\"nav-bar\">\n        <button class=\"open-sans nav-bar__account btn\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"open-sans nav-bar__courses btn\">My Courses</button>\n        <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n        <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n        <button class=\"open-sans nav-bar__lessons btn\">My Lessons</button>\n    </div>\n";
studentDetails.innerHTML = "\n <div class=\"data\">\n    <img src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n        <div class=\"details\">\n            <h1>User Name: " + user.name + "</h1>\n            <h2>User Phone: " + user.Phone + "</h2>\n            <h2>User Id: " + user.id + "</h2>\n        </div>\n    </div>";
//    function onMyAccountClick() {
//        window.location.href = "/html-ts-css-project/registration/registration.html";
//     }
//     // const input = document.querySelector(".text")! as HTMLInputElement;
//     // input.addEventListener("input", () => {
//     //     setTimeout(() => {
//     //         console.log(input.value);
//     //     }, 2000);
//     // });
