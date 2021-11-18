retrieve();
setInterval(currentTime, 100);
let hour = moment().format('HH');


function currentTime(){
    let today = moment();
    $('#currentDay').text(today.format('dddd, MMMM Do'));
    
    
    
}

// $('.textarea').each(function(){
//     let blockTime = $(this).attr(data-number);
//     console.log(blockTime);
// })



    
    




let content = localStorage.getItem("hourOfDay");
let button = $('button');



let taskHour;
let hourlyTask;



button.on('click',assignTask);


function assignTask(event){
    let selectedRow = event.target;
    hourlyTask = selectedRow.previousElementSibling.value;
    taskHour = selectedRow.dataset.number;
    console.log(taskHour)
    let tod = selectedRow.dataset.number;
    
    localStorage.setItem(taskHour,hourlyTask);
}
function retrieve(){
    $("#hour9 .textarea").val(localStorage.getItem('9'));
    $("#hour10 .textarea").val(localStorage.getItem('10'));
    $("#hour11 .textarea").val(localStorage.getItem('11'));
    $("#hour12 .textarea").val(localStorage.getItem('12'));
    $("#hour13 .textarea").val(localStorage.getItem('13'));
    $("#hour14 .textarea").val(localStorage.getItem('14'));
    $("#hour15 .textarea").val(localStorage.getItem('15'));
    $("#hour16 .textarea").val(localStorage.getItem('16'));
    $("#hour17 .textarea").val(localStorage.getItem('17'));
}

