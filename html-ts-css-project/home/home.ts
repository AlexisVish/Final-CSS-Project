const home = document.querySelector("#home")! as HTMLDivElement;
const head = document.createElement("div")! as HTMLDivElement;
const data = document.createElement("div")! as HTMLDivElement;
const nav = document.createElement("navbar")! as HTMLDivElement;
const studentDetails = document.createElement("div")! as HTMLDivElement;


data.append(nav,studentDetails);
home.append(head, data);
head.classList.add("head");
nav.classList.add("nav-bar");
studentDetails.classList.add("details-container");
data.classList.add("body-container")
home.classList.add("container");

head.innerHTML=`  <div class="search-container open-sans">
        <input class="input" type="text" id="search-bar" placeholder="Search..." />
        <button id="search-button" class="open-sans sr">Search</button>
    </div>
    <img class="img" src="/html-ts-css-project/images/logo1.png" alt="school logo1">

`

nav.innerHTML=`  <div class="nav-bar">
        <button class="open-sans nav-bar__account btn" onClick="onMyAccountClick()">My Account</button>
        <button class="open-sans nav-bar__courses btn">My Courses</button>
        <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
        <button class="open-sans nav-bar__forums btn">My Forums</button>
        <button class="open-sans nav-bar__lessons btn">My Lessons</button>
    </div>
`
studentDetails.innerHTML=`
 <div class="data">
    <img src="/html-ts-css-project/images/profile.webp" alt="null photo">
        <div class="details">
            <h1>User Name: ${user.name}</h1>
            <h2>User Phone: ${user.Phone}</h2>
            <h2>User Id: ${user.id}</h2>
        </div>
    </div>`




//    function onMyAccountClick() {
//        window.location.href = "/html-ts-css-project/registration/registration.html";
//     }
    
//     // const input = document.querySelector(".text")! as HTMLInputElement;
    
//     // input.addEventListener("input", () => {
//     //     setTimeout(() => {
//     //         console.log(input.value);
//     //     }, 2000);
//     // });
        