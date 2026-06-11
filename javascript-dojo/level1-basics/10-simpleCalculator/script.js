inputOneAccess=document.querySelector(".one");
inputTwoAccess=document.querySelector(".two");

operatorAccess=document.querySelector(".operators");

btnAccess=document.querySelector(".btn");

paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",calculateMe);

function calculateMe(){
    let a=Number(inputOneAccess.value);
    let b=Number(inputTwoAccess.value);
    let val=0;

    if(operatorAccess.value=="+"){
        val=a+b;
    }else if(operatorAccess.value=="-"){
        val=a-b;
    }else if(operatorAccess.value=="*"){
        val=a*b;
    }else{
        val=a/b;
    }
    paraAccess.innerText=val.toFixed(2);
}