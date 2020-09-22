const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const startStudy = "21 Jul 2020";
const startStudyDate = new Date(startStudy);

count();

function count() {
    const currentDate = new Date();
    
    const diff = new Date(currentDate - startStudyDate);
    const seconds = diff.getSeconds();
    const minutes = diff.getUTCMinutes();
    const hours = diff.getUTCHours();
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);

    daysEl.innerText = days;
    hoursEl.innerText = String(hours).padStart(2, "0");
    minsEl.innerText = String(minutes).padStart(2, "0");
    secondsEl.innerText = String(seconds).padStart(2, "0");

}
setInterval(count, 1000);