retrieve();
setInterval(currentTime, 100);
let tod = moment().format('HH');


function currentTime(){
    let today = moment();
    $('#currentDay').text(today.format('dddd, MMMM Do'));
    

$('.textarea').each(function(){
    let blockTime = $(this).attr('data-number');
    if(tod === blockTime){
        $(this).addClass('bg-secondary');
        $(this).removeClass('bg-danger');
        $(this).removeClass('bg-success');
    } else if(tod > blockTime){
        $(this).addClass('bg-danger');
        $(this).removeClass('bg-success');
        $(this).removeClass('bg-secondary');
    } else if(tod < blockTime){
        $(this).addClass('bg-success');
        $(this).removeClass('bg-danger');
        $(this).removeClass('bg-secondary');

    }
    console.log(blockTime);
    console.log(tod);
})

}


$('.clear').on('click',function(){
    localStorage.clear();
    window.location.reload()
});
    
    




let taskHour;
let hourlyTask;



$('button').on('click',assignTask);


function assignTask(event){
    let selectedRow = event.target;
    hourlyTask = selectedRow.previousElementSibling.value;
    taskHour = selectedRow.dataset.number;
    console.log(taskHour)
    
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

