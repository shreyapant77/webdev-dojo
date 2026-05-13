// dom selectors
btnAccess=document.querySelector(".btn");


// event listener
btnAccess.addEventListener("click",changeColor);

let val=0;
// function 
function changeColor(){
    val=Math.floor(Math.random()*16777215);
    let str=val.toString(16);
   document.body.style.backgroundColor = "#"+str;

}