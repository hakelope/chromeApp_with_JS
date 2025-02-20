const loginForm = document.getElementById("login_form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function loginFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}

async function paintGreeting() {
    username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요, ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    await sleep(0.5);
    greeting.style.width = "100vw";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginFormSubmit);
} else {
    paintGreeting();
}