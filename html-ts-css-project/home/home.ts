const home = document.querySelector("#home")! as HTMLDivElement;

home.innerHTML = `
  <div class="nav-bar box">
        <button class="nav-bar-account" onClick="onMyAccountClick()">My Account</button>
        <button class="nav-bar-courses">My Courses</button>
        <button class="nav-bar-zoom">My Zoom Meetings</button>
        <button class="nav-bar-forums">My Forums</button>
        <button class="nav-bar-lessons">My Lessons</button>
    </div>
   <input type="text" class="text" id="1" placeholder="viva" />

   
   `;
   
   function onMyAccountClick() {
       window.location.href = "/html-ts-css-project/registration/registration.html";
    }
    
    const input = document.querySelector(".text")! as HTMLInputElement;
    
    input.addEventListener("input", () => {
        setTimeout(() => {
            console.log(input.value);
        }, 2000);
    });
        