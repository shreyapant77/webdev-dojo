let inputAccess=document.querySelector(".f1");
let btnAccess=document.querySelector(".btn");
let paraAccess=document.querySelector(".f2");

let c=Math.floor(Math.random()*100)+1;

btnAccess.addEventListener("click",guessNumber);

function guessNumber(){
    let x=Number(inputAccess.value);
    if(x<c){
        paraAccess.innerText="your guess is lower";
    }else if(x>c){
         paraAccess.innerText="your guess is higher";
    }else{
        paraAccess.innerText="you won";
        c=Math.floor(Math.random()*100)+1;

    }
}

