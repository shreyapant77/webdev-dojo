btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");

let arr=["fall down eight times get up nine","a man of wisdom once said nothing","the secret ingredient is you"];

btnAccess.addEventListener("click",quoteFactory);

function quoteFactory(){
    let p=Math.floor(Math.random()*arr.length);
    paraAccess.innerText=arr[p];
}