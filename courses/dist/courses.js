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
function renderHeader() {
    head.innerHTML = "  <div class=\"search-container open-sans\">\n          <input class=\"input\" type=\"text\" id=\"search-bar\" placeholder=\"Search...\" />\n          <button id=\"search-button\" class=\"open-sans sr\" onClick=\"onSearchClick()\">Look Up!</button>\n      </div>\n      <img class=\"img\" src=\"/html-ts-css-project/images/logo1.png\" alt=\"school logo1\" onClick=\"onImageClick()\">\n  \n  ";
}
renderHeader();
function onImageClick() {
    window.location.href = "https://www.harvard.edu/";
}
nav.innerHTML = "\n  <div class=\"nav-bar\">\n    <button class=\"open-sans nav-bar__account btn\" onClick=\"OnAccountClick()\">My Account</button>\n    <button class=\"open-sans nav-bar__courses btn\" onClick=\"OnCoursesClick()\">My Courses</button>\n    <button class=\"open-sans nav-bar__zoom btn\">My Zoom Meetings</button>\n    <button class=\"open-sans nav-bar__forums btn\">My Forums</button>\n    <button class=\"open-sans nav-bar__lessons btn\" onClick=\"onMyExitClick()\">Exit</button>\n  </div>\n";
function renderCourses() {
    var userDetailsString = localStorage.getItem("user");
    var userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};
    coursesList.innerHTML = "\n     <div class=\"details\">\n      <img class=\"userPhoto\" src=\"/html-ts-css-project/images/profile.webp\" alt=\"null photo\">\n      <h1>User Name: <span id=\"userName\">" + userDetails.name + "</span></h1>\n      <h2>User Id: <span id=\"userId\">123</span></h2>\n      <h2>My Courses: <span id=\"myCourses\">" + (userDetails.courses.map(function (courseId) { return getCourseNameById(courseId); }).join(", ") || "None") + "</span></h2>\n    </div>\n    <ul>\n      " + courses
        .map(function (course) { return "\n        <button onClick=\"onCourseClick('" + course.courseId + "')\" class=\"btn\">\n          " + course.courseName + "\n        </button>\n      "; }).join("") + "\n    </ul>\n \n  ";
}
renderCourses();
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
function getCourseNameById(courseId) {
    var course = courses.find(function (course) { return course.courseId === courseId; });
    return course ? course.courseName : null;
}
function onCourseClick(courseId) {
    var userDetailsString = localStorage.getItem("user");
    var userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};
    if (!userDetails.courses.includes(courseId)) {
        userDetails.courses.push(courseId);
        var course = courses.find(function (course) { return course.courseId === courseId; });
        if (course) {
            course.studentId = "123";
        }
        localStorage.setItem("user", JSON.stringify(userDetails));
        localStorage.setItem("course", JSON.stringify(courses));
        alert("You have successfully enrolled in " + (course === null || course === void 0 ? void 0 : course.courseName));
    }
    else {
        alert("You are already enrolled in this course.");
    }
    renderCourses();
}
