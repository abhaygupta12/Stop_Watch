let hours = 0;
let minutes = 0;
let seconds = 0;

let time = document.getElementById("display");
let start = document.getElementById("btn1");
let stop = document.getElementById("btn2");
let reset = document.getElementById("btn3");
let counts = null;

start.addEventListener("click",function()
{
    counts = setInterval(displayTime,1000);
     // displayTime()
    
});

stop.addEventListener("click",function()
{
   clearInterval(counts);
});
reset.addEventListener("click",function()
{
    clearInterval(counts);
    time.innerHTML=     `00 : 00 : 00`
    // very importent to start from origin
    seconds = 0;
    minutes= 0;
    hours = 0;
});
function displayTime()
{
    seconds = seconds + 1;
    if(seconds == 60)
    {
        seconds = 0;
        minutes++;
        if(minutes == 60)
        {
            minutes=0;
            hours++;
        }
    }
    h = hours<10? "0" + hours : hours
    m = minutes<10? "0" + minutes : minutes
    s = seconds<10? "0" + seconds : seconds
    time.innerHTML= `${h}: ${m} : ${s}`;
}