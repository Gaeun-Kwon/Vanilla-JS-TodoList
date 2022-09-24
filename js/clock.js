const clock = document.querySelector("#clock");
const today = document.querySelector("#today");

function getClock(){
    const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    today.innerText = `${date.getMonth() + 1}월 ${date.getDate()}일 ${week[date.getDay()]}`;
}

getClock();
setInterval(getClock, 1000);
