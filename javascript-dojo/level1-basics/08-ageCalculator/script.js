let birthDay=document.querySelector(".ipt");
let btnAccess=document.querySelector(".btn");
let paraAccess=document.querySelector(".para");




btnAccess.addEventListener("click",ageCalc);

function ageCalc(){
    let bday=new Date(birthDay.value);
    let today=new Date();

    let birthYear=bday.getFullYear();
    let currYear=today.getFullYear();

    paraAccess.innerText=currYear-birthYear;
}
