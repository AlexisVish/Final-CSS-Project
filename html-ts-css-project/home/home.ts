const home = document.querySelector("#home")! as HTMLDivElement;

// const nav = document.createElement("nav") as HTMLElement;
// const logo = document.createElement("");

home.innerHTML=`
  <div class="nav-bar box">
        <button class="nav-bar-account" onClick="onMyAccountClick()">My Account</button>
        <button class="nav-bar-courses">My Courses</button>
        <button class="nav-bar-zoom">My Zoom Meetings</button>
        <button class="nav-bar-forums">My Forums</button>
        <button class="nav-bar-lessons">My Lessons</button>
    </div>
`


function onMyAccountClick(){
    window.location.href ="/html-ts-css-project/home/home.html"
}