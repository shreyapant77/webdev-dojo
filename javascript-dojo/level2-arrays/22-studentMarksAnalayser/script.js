
inputAccess=document.querySelector(".inpt1");
paraAccess=document.querySelector(".para");

btnAccess=document.querySelector(".btn1");

let marks=[];

btnAccess.addEventListener("click",marksCalc);
let output="";
function marksCalc(){
    marks.push(Number(inputAccess.value));
     output="";
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
        output+="marks in subject "+i+" are "+marks[i]+"\n";
    }
    let avg=(sum/marks.length).toFixed(2);
    paraAccess.innerText="marks are :"+ output+ "total sum is: "+sum+" average is: "+avg;
}