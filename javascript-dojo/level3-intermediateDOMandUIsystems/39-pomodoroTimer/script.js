timerAccess=document.querySelector(".timer");
btnAccess=document.querySelector(".btn");
pauseBtnAccess=document.querySelector(".pauseBtn");

btnAccess.addEventListener("click",startTimer);
pauseBtnAccess.addEventListener("click",pauseTimer);

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
        pauseBtnAccess.innerText = "Pause";
    }
    console.log(intervalId);  
}

function startTimer(){
    if(intervalId==undefined){
        timeLeft = 10;
        timerAccess.innerText = timeLeft;
        pauseBtnAccess.innerText = "Pause";
        intervalId=setInterval(timerTick,1000);
    }
    
}

function pauseTimer(){
    if (timeLeft === 10) {
    return;
}
    if(pauseBtnAccess.innerText=="Pause"){
        pauseBtnAccess.innerText="Resume";
        clearInterval(intervalId);
        intervalId = undefined;
    }else{
         pauseBtnAccess.innerText="Pause";
         intervalId = setInterval(timerTick, 1000);
    }
    
}