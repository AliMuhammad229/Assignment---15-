// Set Interval executes on each time ----> setinterval() --> It takes two para one par is for fn and second para is for time
// set time out fn executes only one time   -----> settimeout()

// setInterval(function(){
//     console.log('hello')
// }, 1000)

// setTimeout(function(){
//     alert('hello')
// }, 1000)

var min = 0
var second = 0
var milisecond = 0
var displayMin = document.getElementById('min')
var displaySec = document.getElementById('sec')
var displayMiliSec = document.getElementById('milisec')
var interval;

function timer(){
    milisecond++
    displayMiliSec.innerHTML = milisecond
    if(milisecond == 100){
        second++
        displaySec.innerHTML = second
        milisecond =0
        
    }
    else if(second == 60){
        min++
        displayMin.innerHTML = min
        second = 0
        
    }


}
// interval = setInterval(timer, 1)
function start(){
    document.getElementById('start').style.display = 'none'
    interval = setInterval(timer, 1)
}
function pause(){
    document.getElementById('start').style.display = 'inline-block'
    // It stops or hault the setinterval
    clearInterval(interval) 
}
function reset(){
    pause()
    min = 0 
    second = 0
    milisecond = 0
    displayMin.innerHTML = min
    displaySec.innerHTML = second
    displayMiliSec.innerHTML = milisecond
}
// timer()
