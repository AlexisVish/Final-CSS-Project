var home = document.querySelector("#home");
// const nav = document.createElement("nav") as HTMLElement;
// const logo = document.createElement("");
home.innerHTML = "\n  <div class=\"nav-bar box\">\n        <button class=\"nav-bar-account\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"nav-bar-courses\">My Courses</button>\n        <button class=\"nav-bar-zoom\">My Zoom Meetings</button>\n        <button class=\"nav-bar-forums\">My Forums</button>\n        <button class=\"nav-bar-lessons\">My Lessons</button>\n    </div>\n";
function onMyAccountClick() {
    window.location.href = "/html-ts-css-project/home/home.html";
}
