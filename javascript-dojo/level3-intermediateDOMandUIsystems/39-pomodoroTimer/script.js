timerAccess=document.querySelector(".timer");
btnAccess=document.querySelector(".btn");

btnAccess.addEventListener("click",startTimer);

let timeLeft=10;
timerAccess.innerText = timeLeft;
let intervalId;

function timerTick(){
    if(timeLeft>0){
        timeLeft--;
    }
    timerAccess.innerText=timeLeft;
    if(timeLeft==0){
        clearInterval(intervalId);
        intervalId = undefined;
    }
    console.log(intervalId);  
}

function startTimer(){
    if(intervalId==undefined){
        timeLeft = 10;
        timerAccess.innerText = timeLeft;
        intervalId=setInterval(timerTick,1000);
    }
    
}

