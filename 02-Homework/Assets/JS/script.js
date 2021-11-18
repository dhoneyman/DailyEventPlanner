let time = Date.now();
console.log(time);

setInterval(currentTime, 1000);

function currentTime(){
    let today = moment();
    $('#currentDay').text(today.format('dddd, MMMM Do'));
}
// function currentHour(){
//     let today = moment();
//     let hour = (today.format('hh'));
//     console.log(hour);
// }
// currentHour();

// let currentHour = moment().format('H');

// console.log(currentHour);

// let nowTime = Date('December 25, 1995 23:15:30');
// let nowHour = nowTime.getHours();

// localStorage.getItem("hourlyTask", hourlyTask);
// let button = $('.btn');
let button = document.querySelector('.btn');

// button.on('click',assignTask);
// let hourlyTask = $('<textarea>');

addEventListener('click', assignTask);

let hourlyTask = document.querySelector('.task').value;
let hourOfDay = document.querySelector('.TOD');

function assignTask(){
    localStorage.setItem('hourOfDay','hourlyTask');
}



