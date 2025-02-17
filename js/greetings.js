const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const resetButton = document.querySelector(".reset");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function loginFormSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting();
}

function localStorageReset() {
    localStorage.removeItem(USERNAME_KEY);
}

function paintGreeting() {
    username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `안녕하세요 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

resetButton.addEventListener("click",localStorageReset);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginFormSubmit)
} else {
    paintGreeting();
}