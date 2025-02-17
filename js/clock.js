const clock = document.querySelector("#clock");

function sayHello() {
    date = new Date()
    H = String(date.getHours()).padStart(2,"0");
    M = String(date.getMinutes()).padStart(2,"0");
    S = String(date.getSeconds()).padStart(2,"0")
    clock.innerText = `${H}:${M}:${S}`;
}

sayHello();
setInterval(sayHello, 1000);