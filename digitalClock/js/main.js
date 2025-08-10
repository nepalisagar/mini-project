const realTime = new Date()
let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let dayVal = document.getElementById("day");
let dateVal = document.getElementById("date");
let monthVal = document.getElementById("month");
let yearVal = document.getElementById("year");
let time = document.getElementById("time");
let day_noon = document.getElementById("day_noon")

function digitalClock(){
    let year = realTime.getFullYear();
    let day = dayName[realTime.getDay()];
    let month = monthName[realTime.getMonth()];
    let date = realTime.getDate();
    let timeHour = String(realTime.getHours()).padStart(2, '0');
    let timeMinute = String(realTime.getMinutes()).padStart(2, '0');
    let fullTime = `${timeHour}:${timeMinute}`;


    dayVal.innerHTML = day;
    dateVal.innerHTML = date;
    monthVal.innerHTML = month;
    yearVal.innerHTML = year;
    time.innerHTML = fullTime;

}

setInterval(digitalClock, 1000);