inputAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

let arr=[];
btnAccess.addEventListener("click",addElement);

function addElement(){
    arr.push(inputAccess.value);
    paraAccess.innerText=arr;
}