inputAccess=document.querySelector(".inpt1");
submitBtnAccess=document.querySelector(".btn1");

searchAccess=document.querySelector(".inpt2");
searchBtnAccess=document.querySelector(".btn2");

paraAccess=document.querySelector(".para");

submitBtnAccess.addEventListener("click",submitItem);
searchBtnAccess.addEventListener("click",searchItem);

let items=[];
function submitItem(){
    items.push(inputAccess.value.toLowerCase());
}
function searchItem(){
    let output="";
    for(let i=0;i<items.length;i++){
        if(items[i].includes(searchAccess.value.toLowerCase())){
            output+=items[i]+"\n";
        }
    }
    paraAccess.innerText=output;
}