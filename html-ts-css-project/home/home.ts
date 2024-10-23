const home = document.querySelector("#home")! as HTMLDivElement;
const header = document.createElement("head") as HTMLDivElement;
const navBar = document.createElement("div")! as HTMLDivElement;
const body = document.createElement("div")! as HTMLDivElement;
home.append(navBar, header, body);
home.classList.add("container");

navBar.innerHTML = `
  <div class="nav-bar">
        <button class="open-sans nav-bar__account btn" onClick="onMyAccountClick()">My Account</button>
        <button class="open-sans nav-bar__courses btn">My Courses</button>
        <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
        <button class="open-sans nav-bar__forums btn">My Forums</button>
        <button class="open-sans nav-bar__lessons btn">My Lessons</button>
    </div>

   
   `;



   header.innerHTML=`
   <div class="search-container open-sans">
        <input type="text" id="search-bar" placeholder="Search..." />
        <button id="search-button" class="open-sans">Search</button>
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
        