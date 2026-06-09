let heightAccess=document.querySelector(".h");
let weightAccess=document.querySelector(".w");
let pAccess=document.querySelector(".para");
let btnAccess=document.querySelector(".btn");

btnAccess.addEventListener("click",bmiCalc);



function bmiCalc(){
    let bmi=Number(weightAccess.value)/(Number(heightAccess.value)*Number(heightAccess.value));
    if(bmi<18.5){
        pAccess.innerText="Underweight";
    }else if(bmi>=18.5 && bmi<=24.9){
         pAccess.innerText="healthy";
    }else if(bmi>=25.0 && bmi<=29.9){
        pAccess.innerText="overweight";
    }else{
         pAccess.innerText="obese";
    }
}