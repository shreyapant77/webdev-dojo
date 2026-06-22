//<h1>this is expense tracker</h1>
// <h2>enter expense of a particular item</h2>
 // <input class="inpt" placeholder="enter expense of item">
        // <button class="btn1">submit</button>
        // <p class="para">expense of each item total and average expense will be shown here</p>
        //i have written this above so that there is no typo while writing names of variables


inputAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",expenseCalc);


let exp=[];
let output="";
function expenseCalc(){
    exp.push(Number(inputAccess.value));
    output="";
    let sum=0;
    for(let i=0;i<exp.length;i++){
        output+="the cost of "+i+" item is : "+exp[i]+"\n";
        sum+=exp[i];
    }
    let avg=(sum/exp.length).toFixed(2);
    paraAccess.innerText=output+"\n"+"Total sum is : "+sum+"\n"+"Average expense of each item is : "+avg;
}