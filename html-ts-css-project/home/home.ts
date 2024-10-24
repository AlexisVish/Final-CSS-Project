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

function renderHeader() {
    head.innerHTML = `
        <div class="search-container open-sans">
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

function renderNavBar() {
    nav.innerHTML = `
        <div class="nav-bar">
            <button class="open-sans nav-bar__account btn" onClick="OnAccountClick()">My Account</button>
            <button class="open-sans nav-bar__courses btn" onClick="OnCoursesClick()">My Courses</button>
            <button class="open-sans nav-bar__zoom btn">My Zoom Meetings</button>
            <button class="open-sans nav-bar__forums btn">My Forums</button>
            <button class="open-sans nav-bar__lessons btn" onClick="onMyExitClick()">Exit</button>
        </div>
    `;
}
renderNavBar();

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

const userDetailsString = localStorage.getItem("users");
const users = userDetailsString ? JSON.parse(userDetailsString) : [];
const userIdx = users.length ? users[users.length - 1] : null; 

if (userIdx) {
    studentDetails.innerHTML = `
        <img class="userPhoto" src="/html-ts-css-project/images/profile.webp" alt="null photo">
        <div class="data">
            <div class="details">
                <h1>User Name: <span id="userName">${userIdx.name}</span></h1>
                <h2>User Phone: <span id="userPhone">${userIdx.phone}</span></h2>
                <h2>User Id: <span id="userId">123</span></h2>
            </div>
            <button id="B" class="btn" onClick="onEditClick()">Edit</button>
        </div>
    `;
} else {
    studentDetails.innerHTML = `<p>No user found.</p>`;
}

function onEditClick() {
    const userName = document.querySelector("#userName") as HTMLElement; 
    const userPhone = document.querySelector("#userPhone") as HTMLElement; 
    const editButton = document.querySelector("#B")! as HTMLButtonElement;

    userName.innerHTML = `<input type="text" id="editName" class="input" placeholder="Enter a Name" value="${userName.innerText}">`;
    userPhone.innerHTML = `<input type="text" id="editPhone" class="input" placeholder="Enter a Phone number" value="${userPhone.innerText}">`;

    editButton.style.display = "none";

    const saveButton = document.createElement("button")! as HTMLButtonElement;
    saveButton.textContent = "Save";
    saveButton.type = "button";
    saveButton.classList.add("btn");

    const details = document.querySelector(".details")! as HTMLDivElement;
    details.append(saveButton);

    const exitButton = document.createElement("button")! as HTMLButtonElement;
    exitButton.textContent = "Exit";
    exitButton.type = "button";
    exitButton.classList.add("btn");
    details.append(exitButton);

    exitButton.addEventListener("click", (event) => {
        event.preventDefault();
        saveButton.style.display = "none";
        exitButton.style.display = "none";
        editButton.style.display = "block";
        userName.innerHTML = `${userIdx.name}`;
        userPhone.innerHTML = `${userIdx.phone}`;
    });

    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        const newName = (document.getElementById("editName") as HTMLInputElement).value;
        const newPhone = (document.getElementById("editPhone") as HTMLInputElement).value;

        if (newName === "" || newPhone === "") {
            alert("No changes were made!");
            return;
        } else {
            const phoneRegex = /^\d{10}$/;
            if (phoneRegex.test(newPhone)) {
                userIdx.name = newName.trim();
                userIdx.phone = newPhone.trim();
                localStorage.setItem("users", JSON.stringify(users));

                userName.innerHTML = `${userIdx.name}`;
                userPhone.innerHTML = `${userIdx.phone}`;
                editButton.style.display = "block";
                saveButton.style.display = "none";
                exitButton.style.display = "none";
            } else {
                alert("Invalid number!");
                return;
            }
        }
    });
}
