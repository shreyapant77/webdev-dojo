billAmountAccess=document.querySelector(".billAmount");
tipPercentageAccess=document.querySelector(".tipPercentage");
btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",tipCalc);

function tipCalc(){
    let bill=Number(billAmountAccess.value);
    let tp=Number(tipPercentageAccess.value);
    let tip=(bill*tp)/100;
    let total=bill+tip;
    paraAccess.innerText=total.toFixed(1);//to fixed converts to that many deciaml places as written inside toFixed bracket

}

