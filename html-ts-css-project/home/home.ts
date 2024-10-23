const home = document.querySelector("#home")! as HTMLDivElement;
const header = document.createElement("header") as HTMLHeadElement;
const navBar = document.createElement("div")! as HTMLDivElement;
home.appendChild(navBar);
home.appendChild(header);

navBar.innerHTML = `
  <div class="nav-bar box">
        <button class="nav-bar-account" onClick="onMyAccountClick()">My Account</button>
        <button class="nav-bar-courses">My Courses</button>
        <button class="nav-bar-zoom">My Zoom Meetings</button>
        <button class="nav-bar-forums">My Forums</button>
        <button class="nav-bar-lessons">My Lessons</button>
    </div>

   
   `;



   header.innerHTML=`
   <div class="search-container">
        <input type="text" id="search-bar" placeholder="Search..." />
        <button id="search-button">Search</button>
    </div>
   `




   function onMyAccountClick() {
       window.location.href = "/html-ts-css-project/registration/registration.html";
    }
    
    // const input = document.querySelector(".text")! as HTMLInputElement;
    
    // input.addEventListener("input", () => {
    //     setTimeout(() => {
    //         console.log(input.value);
    //     }, 2000);
    // });
        