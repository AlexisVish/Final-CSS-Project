const log = document.createElement("log") as HTMLParagraphElement;

const loginContainer = document.getElementById(
  "login-container"
)! as HTMLDivElement;
loginContainer.appendChild(log);
log.className='log-box';

const greet = document.createElement("p")! as HTMLParagraphElement;
const mailInput = document.createElement("mail")! as HTMLInputElement;
const passwordInput = document.createElement("password")! as HTMLInputElement;
const loginButton = document.createElement("button")! as HTMLButtonElement;

greet.innerText="Login";

mailInput.placeholder="enter your mail please";
mailInput.className='input';

passwordInput.placeholder="enter your password please";
passwordInput.className='input';

loginButton.type="submit";
loginButton.textContent="Login"
loginButton.className='btn';

log.append(greet, mailInput, passwordInput, loginButton);

function checkingData(mailInput, passwordInput) {
  try {
    loginButton.addEventListener("click", (event) => {
      if (
        mailInput.value === localStorage.getItem(mail.value) &&
        passwordInput.value === localStorage.getItem(password.value)
      ) {
        return true;
      }
    });
  } catch (error) {
    console.error("No data was found");
  }
}

function login(checkingData){
    try {
        if (checkingData===true){

        }
    } catch (error) {
        console.error('No answer from checking function')
    }
}
