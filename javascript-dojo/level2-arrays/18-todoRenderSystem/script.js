inptAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",addTask);
let task=[];

function addTask(){
    task.push(inptAccess.value);
    let output="";
    for(let i=0;i<task.length;i++){
          output += task[i] + "\n";
    }
    paraAccess.innerText=output;
}