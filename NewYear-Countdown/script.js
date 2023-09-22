const days = document.querySelector("days");
const hours = document.querySelector("hours");
const minutes = document.querySelector("minutes");
const seconds = document.querySelector("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

//Update Countdowntime
function UpdateCountDownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    //converting the time from miliseconds->seconds->minutes->hours->days
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60);
    const m = Math.floor(diff / 1000 / 60);
    const s = Math.floor(diff / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h < 10 ? "0" + h : h;
    document.getElementById("minutes").textContent = m < 10 ? "0" + m : m;
    document.getElementById("seconds").textContent = s < 10 ? "0" + s : s;
}

setInterval(UpdateCountDownTime, 1000);
