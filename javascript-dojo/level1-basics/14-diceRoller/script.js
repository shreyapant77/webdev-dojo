btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",rollDice);

function rollDice(){
    let val=Math.floor(Math.random()*6)+1;
    paraAccess.innerText="Result "+val;
}