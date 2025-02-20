const clock = document.querySelector("#clock");
let flash = true;

function clockUpdate() {
    date = new Date()
    H = String(date.getHours()).padStart(2,"0");
    M = String(date.getMinutes()).padStart(2,"0");
    if (flash) {
        clock.innerText = `${H}:${M}`;
        flash = false;
    } else {
        clock.innerText = `${H} ${M}`;
        flash = true;
    }
    
}

clockUpdate();
setInterval(clockUpdate, 500);