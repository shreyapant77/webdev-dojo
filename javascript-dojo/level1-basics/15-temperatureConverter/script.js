let convoTypeAccess=document.querySelector(".convoType");
let beforeConvAccess=document.querySelector(".beforeConv");
let inputAccess=document.querySelector(".inpt");
let btnAccess=document.querySelector(".btn");
let paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",tempConv);

function tempConv(){
    if(convoTypeAccess.value=="cel"){
        beforeConvAccess.innerText="the temp you entered was in Fahrenheit : "+inputAccess.value;
        let ans=(Number(inputAccess.value)-32)*5/9;
        paraAccess.innerText="the converted temper in Celsius is : "+ans.toFixed(2);

    }else{
        beforeConvAccess.innerText="the temp you entered was in Celsius : "+inputAccess.value;
        let ans=(Number(inputAccess.value)*9/5)+32;
        paraAccess.innerText="the converted temper in Fahrenheit is : "+ans.toFixed(2);
    }
}