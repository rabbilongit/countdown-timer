const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minEL = document.getElementById('min');
const secEl = document.getElementById('sec');


const newyear = "1 jan 2023";

function countdown(){
const today_date = new Date();
const newyeardate = new Date(newyear);

const sec = (newyeardate - today_date ) / 1000;

//seconds
const secmain = Math.floor(sec)% 60;

//days
const days = Math.floor(sec / 3600/ 24) ;


// minutes
const min = Math.floor(sec / 60)%60;
 
// hours
const hours = Math.floor(sec/3600)%24;

daysEL .innerHTML = days;
hoursEL.innerHTML =hours;
minEL.innerHTML = min;
secEl.innerHTML = secmain;
console.log(days, hours ,min ,sec);
}
 
countdown();
 setInterval(countdown , 1000);