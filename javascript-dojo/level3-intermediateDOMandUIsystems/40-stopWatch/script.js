watchAccess=document.querySelector(".stopwatch");
startBtnAccess=document.querySelector(".start");
pauseBtnAccess=document.querySelector(".pause");
resetBtnAccess=document.querySelector(".reset");

let time=0;
let intervalId;

startBtnAccess.addEventListener("click",startTimer);
pauseBtnAccess.addEventListener("click",pauseTimer);
resetBtnAccess.addEventListener("click",resetTimer);


function timerTick(){
    time++;
    watchAccess.innerText=time;
}
function startTimer(){
    if(intervalId==undefined){
        intervalId=setInterval(timerTick,1000);
    }
}
function pauseTimer(){
    if(pauseBtnAccess.innerText=="pause"){
        pauseBtnAccess.innerText="resume";
        clearInterval(intervalId);
        intervalId=undefined;
    }else{
        pauseBtnAccess.innerText="pause";
        intervalId=undefined;
        intervalId=setInterval(timerTick,1000);
    }
    
}
function resetTimer(){
    time=0;
    watchAccess.innerText=time;
    if(pauseBtnAccess.innerText=="resume"){
        pauseBtnAccess.innerText="pause";
    }
    clearInterval(intervalId);
    intervalId=undefined;
}