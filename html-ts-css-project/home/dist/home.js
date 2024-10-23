var home = document.querySelector("#home");
home.innerHTML = "\n  <div class=\"nav-bar box\">\n        <button class=\"nav-bar-account\" onClick=\"onMyAccountClick()\">My Account</button>\n        <button class=\"nav-bar-courses\">My Courses</button>\n        <button class=\"nav-bar-zoom\">My Zoom Meetings</button>\n        <button class=\"nav-bar-forums\">My Forums</button>\n        <button class=\"nav-bar-lessons\">My Lessons</button>\n    </div>\n   <input type=\"text\" class=\"text\" id=\"1\" placeholder=\"viva\" />\n\n   \n   ";
function onMyAccountClick() {
    window.location.href = "/html-ts-css-project/registration/registration.html";
}
var input = document.querySelector(".text");
input.addEventListener("input", function () {
    setTimeout(function () {
        console.log(input.value);
    }, 2000);
});
