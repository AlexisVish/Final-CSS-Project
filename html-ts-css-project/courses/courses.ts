class Course {
  courseName: string;
  courseId: string;
  studentId?: string;

  constructor(n: string, studId?: string) {
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

// Initial user data in local storage
localStorage.setItem("user", JSON.stringify({ name: "Alexis", phone: "0538999886", courses: [] }));

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

head.innerHTML = `
  <div class="search-container open-sans">
    <input class="input" type="text" id="search-bar" placeholder="Search..." />
    <button id="search-button" class="open-sans sr" onClick="onSearchClick()">Look Up!</button>
  </div>
  <img class="img" src="/html-ts-css-project/images/logo1.png" alt="school logo1">
`;

nav.innerHTML = `
  <div class="nav-bar">
    <button class="open-sans nav-bar__account btn" onClick="OnAccountClick()">My Account</button>
    <button class="open-sans nav-bar__courses btn" onClick="OnCoursesClick()">My Courses</button>
    <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
    <button class="open-sans nav-bar__forums btn">My Forums</button>
    <button class="open-sans nav-bar__lessons btn" onClick="onMyExitClick()">Exit</button>
  </div>
`;

function OnAccountClick() {
  window.location.href = "../home/home.html";
}

function OnCoursesClick() {
  window.location.href = "../courses/courses.html";
}

function onSearchClick() {
  const searchInput = document.getElementById("search-bar")! as HTMLInputElement;
  const search = searchInput.value;

  alert(`You searched for ${search}`);
  searchInput.value = "";
}

function onMyExitClick() {
  window.location.href = "../login/login.html";
}

// Render courses
function renderCourses() {
  const userDetailsString = localStorage.getItem("user");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};

  coursesList.innerHTML = `
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
    <div class="details">
      <img class="userPhoto" src="/html-ts-css-project/images/profile.webp" alt="null photo">
      <h1>User Name: <span id="userName">${userDetails.name}</span></h1>
      <h2>User Id: <span id="userId">123</span></h2>
      <h2>My Courses: <span id="myCourses">${userDetails.courses.join(", ")}</span></h2>
    </div>
  `;
}

renderCourses(); // Initial call to render courses

function onCourseClick(courseId: string) {
  const userDetailsString = localStorage.getItem("user");
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : {};

  // Check if the user already has this course assigned
  if (!userDetails.courses.includes(courseId)) {
    userDetails.courses.push(courseId); // Add courseId to user's courses

    // Find the course and assign the studentId
    const course = courses.find(c => c.courseId === courseId);
    if (course) {
      course.studentId = "123"; // Set the studentId (you might replace this with the actual user ID)
    }

    // Update local storage with the modified user details
    localStorage.setItem("user", JSON.stringify(userDetails));

    // Feedback for the user
    alert(`You have successfully enrolled in ${course?.courseName}`);
  } else {
    alert("You are already enrolled in this course.");
  }

  renderCourses(); // Re-render courses to update the course list displayed
}
