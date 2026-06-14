btnAccess=document.querySelector(".btn");
paraAccess=document.querySelector(".para");
btnAccess.addEventListener("click",emojiFactory);

let arr=["😂","🐿️","💯","😭","🌟","🥇","😌"];
function emojiFactory(){
    let p=Math.floor(Math.random()*arr.length);
    paraAccess.innerText=arr[p];
}