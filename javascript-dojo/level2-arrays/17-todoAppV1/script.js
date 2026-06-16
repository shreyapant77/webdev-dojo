inptAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",taskAdder);
let task=[];
function taskAdder(){
    task.push(inptAccess.value);
    paraAccess.innerText=task;
}