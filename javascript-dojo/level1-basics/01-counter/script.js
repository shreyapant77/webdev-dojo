// dom selection
let incAccess=document.querySelector(".btn_inc");
let decAccess=document.querySelector(".btn_dec");

let currVal=document.querySelector("#current_value");
let count=0;

// event listener
incAccess.addEventListener("click",increaseCount);
decAccess.addEventListener("click",decreaseCount);

// functions
function increaseCount(){
    count++;
    currVal.innerText=count;

}

function decreaseCount(){
    if(count>0){
        count--;
    }
    currVal.innerText=count;

}

