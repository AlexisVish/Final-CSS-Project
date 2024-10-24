class Course {
  courseName: string;
  courseId: string;
  studentId?: string[];

  constructor(n: string, studId?: string[]) {
    this.courseName = n;
    this.courseId = crypto.randomUUID();
    this.studentId = studId;
  }
}

const courses: Course[] = [
  new Course("Math"),
  new Course("Technology"),
  new Course("Art"),
  new Course("Geography"),
  new Course("Data Analyst"),
];

localStorage.setItem(
  "user",
  JSON.stringify({ name: "Alexis", phone: "0538999886", courses: [] })
);

const home = document.querySelector("#courses")! as HTMLDivElement;
const head = document.createElement("div")! as HTMLDivElement;
const data = document.createElement("div")! as HTMLDivElement;
const nav = document.createElement("navbar")! as HTMLDivElement;
const coursesList = document.createElement("div")! as HTMLDivElement;

data.append(nav, coursesList);
home.append(head, data);
head.classList.add("head");
nav.classList.add("nav-bar");
coursesList.classList.add("details-container");
data.classList.add("body-container");
home.classList.add("container");

function renderHeader() {
  head.innerHTML = `  <div class="search-container open-sans">
          <input class="input" type="text" id="search-bar" placeholder="Search..." />
          <button id="search-button" class="open-sans sr" onClick="onSearchClick()">Look Up!</button>
      </div>
      <img class="img" src="/html-ts-css-project/images/logo1.png" alt="school logo1" onClick="onImageClick()">
  
  `;
}
renderHeader();
function onImageClick() {
  window.location.href = "https://www.harvard.edu/";
}

nav.innerHTML = `
  <div class="nav-bar">
    <button class="open-sans nav-bar__account btn" onClick="OnAccountClick()">My Account</button>
    <button class="open-sans nav-bar__courses btn" onClick="OnCoursesClick()">My Courses</button>
    <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
    <button class="open-sans nav-bar__forums btn">My Forums</button>
    <button class="open-sans nav-bar__lessons btn" onClick="onMyExitClick()">Exit</button>
  </div>
`;

function renderCourses() {
  const userDetailsString = localStorage.getItem("user");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};

  coursesList.innerHTML = `
     <div class="details">
      <img class="userPhoto" src="/html-ts-css-project/images/profile.webp" alt="null photo">
      <h1>User Name: <span id="userName">${userDetails.name}</span></h1>
      <h2>User Id: <span id="userId">123</span></h2>
      <h2>My Courses: <span id="myCourses">${
        userDetails.courses
          .map((courseId) => getCourseNameById(courseId))
          .join(", ") || "None"
      }</span></h2>
    </div>
    <ul>
      ${courses
        .map(
          (course) => `
        <button onClick="onCourseClick('${course.courseId}')" class="btn">
          ${course.courseName}
        </button>
      `
        )
        .join("")}
    </ul>
 
  `;
}

renderCourses();
function OnAccountClick() {
  window.location.href = "../home/home.html";
}

function OnCoursesClick() {
  window.location.href = "../courses/courses.html";
}

function onSearchClick() {
  const searchInput = document.getElementById(
    "search-bar"
  )! as HTMLInputElement;
  const search = searchInput.value;

  alert(`You searched for ${search}`);
  searchInput.value = "";
}

function onMyExitClick() {
  window.location.href = "../login/login.html";
}

function getCourseNameById(courseId) {
  const course = courses.find((course) => course.courseId === courseId);
  return course ? course.courseName : null;
}

function onCourseClick(courseId: string) {
  const userDetailsString = localStorage.getItem("user");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};

  if (!userDetails.courses.includes(courseId)) {
    userDetails.courses.push(courseId);

    const course = courses.find((course) => course.courseId === courseId);
    if (course) {
      course.studentId?.push("123");
    }

    localStorage.setItem("user", JSON.stringify(userDetails));
    localStorage.setItem("courses", JSON.stringify(course));
    alert(`You have successfully enrolled in ${course?.courseName}`);
  } else {
    alert("You are already enrolled in this course.");
  }
  renderCourses();
}
