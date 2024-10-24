var Course = /** @class */ (function () {
    function Course(n, studId) {
        this.courseName = n;
        this.courseId = crypto.randomUUID();
        this.studentId = studId;
    }
    return Course;
}());
var courses = [
    new Course("Math"),
    new Course("Technology"),
    new Course("Art"),
    new Course("Geography"),
    new Course("Data Analyst"),
];
// Initial user data in local storage
localStorage.setItem("user", JSON.stringify({ name: "Alexis", phone: "0538999886", courses: [] }));
var home = document.querySelector("#courses");
var head = document.createElement("div");
var data = document.createElement("div");
var nav = document.createElement("navbar");
var coursesList = document.createElement("div");
data.append(nav, coursesList);
home.append(head, data);
head.classList.add("head");
nav.classList.add("nav-bar");
coursesList.classList.add("details-container");
data.classList.add("body-container");
home.classList.add("container");
head.innerHTML = "\n  <div class=\"search-container open-sans\">\n    <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n    <button id=\"search-button\" class=\"open-sans sr\" onClick=\"onSearchClick()\">Look Up!</button>\n  </div>\n  <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\">\n";
nav.innerHTML = "\n  <div class=\"nav-bar\">\n    <button class=\"open-sans nav-bar__account btn\" onClick=\"OnAccountClick()\">My Account</button>\n    <button class=\"open-sans nav-bar__courses btn\" onClick=\"OnCoursesClick()\">My Courses</button>\n    <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n    <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n    <button class=\"open-sans nav-bar__lessons btn\" onClick=\"onMyExitClick()\">Exit</button>\n  </div>\n";
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
// Render courses
function renderCourses() {
    var userDetailsString = localStorage.getItem("user");
    var userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};
    coursesList.innerHTML = "\n    <ul>\n      " + courses
        .map(function (course) { return "\n        <button onClick=\"onCourseClick('" + course.courseId + "')\" class=\"btn\">\n          " + course.courseName + "\n        </button>\n      "; })
        .join("") + "\n    </ul>\n    <div class=\"details\">\n      <img class=\"userPhoto\" src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n      <h1>User Name: <span id=\"userName\">" + userDetails.name + "</span></h1>\n      <h2>User Id: <span id=\"userId\">123</span></h2>\n      <h2>My Courses: <span id=\"myCourses\">" + userDetails.courses.join(", ") + "</span></h2>\n    </div>\n  ";
}
renderCourses(); // Initial call to render courses
function onCourseClick(courseId) {
    var userDetailsString = localStorage.getItem("user");
    var userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};
    // Check if the user already has this course assigned
    if (!userDetails.courses.includes(courseId)) {
        userDetails.courses.push(courseId); // Add courseId to user's courses
        // Find the course and assign the studentId
        var course = courses.find(function (c) { return c.courseId === courseId; });
        if (course) {
            course.studentId = "123"; // Set the studentId (you might replace this with the actual user ID)
        }
        // Update local storage with the modified user details
        localStorage.setItem("user", JSON.stringify(userDetails));
        // Feedback for the user
        alert("You have successfully enrolled in " + (course === null || course === void 0 ? void 0 : course.courseName));
    }
    else {
        alert("You are already enrolled in this course.");
    }
    renderCourses(); // Re-render courses to update the course list displayed
}
