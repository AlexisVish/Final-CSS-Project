const home = document.querySelector("#home")! as HTMLDivElement;
const head = document.createElement("div")! as HTMLDivElement;
const data = document.createElement("div")! as HTMLDivElement;
const nav = document.createElement("navbar")! as HTMLDivElement;
const studentDetails = document.createElement("div")! as HTMLDivElement;

data.append(nav, studentDetails);
home.append(head, data);
head.classList.add("head");
nav.classList.add("nav-bar");
studentDetails.classList.add("details-container");
data.classList.add("body-container");
home.classList.add("container");

head.innerHTML = `  <div class="search-container open-sans">
        <input class="input" type="text" id="search-bar" placeholder="Search..." />
        <button id="search-button" class="open-sans sr" onClick="onSearchClick()">Look Up!</button>
    </div>
    <img class="img" src="/html-ts-css-project/images/logo1.png" alt="school logo1">

`;
function onSearchClick() {
  const searchInput = document.getElementById(
    "search-bar"
  )! as HTMLInputElement;
  const search = searchInput.value;

  alert(`You searched for ${search}`);
  searchInput.value = "";
}

nav.innerHTML = `  <div class="nav-bar">
        <button class="open-sans nav-bar__account btn" onClick="onMyAccountClick()">My Account</button>
        <button class="open-sans nav-bar__courses btn">My Courses</button>
        <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
        <button class="open-sans nav-bar__forums btn">My Forums</button>
        <button class="open-sans nav-bar__lessons btn">My Lessons</button>
        
    </div>
`;
studentDetails.innerHTML = `

    <img src="/html-ts-css-project/images/profile.webp" alt="null photo">
     <div class="data">
        <div class="details">
            <h1>User Name: <span id="userName">${userDetails.name}</span></h1>
            <h2>User Phone: <span id="userName">${userDetails.name}</span></h2>
            <h2>User Id: <span id="userName">${userDetails.name}</span></h2>
        </div>
    <button class="btn" onClick="onEditClick()">Edit</button></div>
    
`;
const userDetailsString = localStorage.getItem("user");
const userDetails = userDetailsString
  ? (JSON.parse(userDetailsString) as Student)
  : null;
function onEditClick() {
  const userName = document.getElementById("userName")! as HTMLElement;
  userName.innerHTML = `<input type="text" id="editName" value="${userName.innerText}">`;
}

//    function onMyAccountClick() {
//        window.location.href = "/html-ts-css-project/registration/registration.html";
//     }

//     // const input = document.querySelector(".text")! as HTMLInputElement;

//     // input.addEventListener("input", () => {
//     //     setTimeout(() => {
//     //         console.log(input.value);
//     //     }, 2000);
//     // });
