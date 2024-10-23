// const home = document.querySelector("#home")! as HTMLDivElement;
// const head = document.createElement("div") as HTMLDivElement;
// const navBar = document.createElement("div")! as HTMLDivElement;
// const body = document.createElement("div")! as HTMLDivElement;
// home.appendChild(head);
// home.appendChild(navBar);
// home.appendChild(body);
// home.classList.add("container");
// navBar.innerHTML = `
//   <div class="nav-bar">
//         <button class="open-sans nav-bar__account btn" onClick="onMyAccountClick()">My Account</button>
//         <button class="open-sans nav-bar__courses btn">My Courses</button>
//         <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
//         <button class="open-sans nav-bar__forums btn">My Forums</button>
//         <button class="open-sans nav-bar__lessons btn">My Lessons</button>
//     </div>
//    `;
//    head.innerHTML=`
//    <div class="search-container open-sans">
//         <input type="text" id="search-bar" placeholder="Search..." />
//         <button id="search-button" class="open-sans">Search</button>
//     </div>
//    `
//    function onMyAccountClick() {
//        window.location.href = "/html-ts-css-project/registration/registration.html";
//     }
//     // const input = document.querySelector(".text")! as HTMLInputElement;
//     // input.addEventListener("input", () => {
//     //     setTimeout(() => {
//     //         console.log(input.value);
//     //     }, 2000);
//     // });
var home = document.querySelector("#home");
var nav = document.createElement("navbar");
var head = document.createElement("div");
var data = document.createElement("div");
home.append(head, nav, data);
home.classList.add("container");
nav.innerHTML = "  <div class=\"nav-bar\">\n        <button class=\"open-sans nav-bar__account btn\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"open-sans nav-bar__courses btn\">My Courses</button>\n        <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n        <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n        <button class=\"open-sans nav-bar__lessons btn\">My Lessons</button>\n    </div>\n";
head.innerHTML = "  <div class=\"search-container open-sans\">\n        <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n        <button id=\"search-button\" class=\"open-sans sr\">Search</button>\n    </div>\n";
