paraAccess=document.querySelector(".p1");


function timeNow(){

let time=new Date();

let h=time.getHours();
let m=time.getMinutes();
let s=time.getSeconds();

paraAccess.innerText=h+":"+m+":"+s;
}

setInterval(timeNow,1000);