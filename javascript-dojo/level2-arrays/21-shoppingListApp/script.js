//  <h1>this is a shopping list app that lets you:</h1>

//         <h2>add items to the shopping list</h2>
//         <input class="inpt1" placeholder="enter item to add in list">
//         <button class="btn1">add item</button>

//         <h2>delete items from the shopping list</h2>
//         <input class="inpt2" placeholder="write index of item you want to delete">
//         <button class="btn2">delete item</button>

//         <h2>toggle list items</h2>
//         <input class="inpt3" placeholder="enter index of item you want to toggle">
            // <button class="btn3">toggle button</button>
//         <h2>render the shopping list </h2>
//         <p class="para">here the updated list will be shown:</p>
//i have kept html above so that there is no typo while writing names of variables
inputAccess=document.querySelector(".inpt1");
deleteAccess=document.querySelector(".inpt2");
toggleAccess=document.querySelector(".inpt3");
paraAccess=document.querySelector(".para");

inputBtnAccess=document.querySelector(".btn1");
delBtnAccess=document.querySelector(".btn2")
toggleBtnAccess=document.querySelector(".btn3");

//global variables
let items=[];
let output="";

//connecting buttons to event listeners
inputBtnAccess.addEventListener("click",addItem);
delBtnAccess.addEventListener("click",delItem);
toggleBtnAccess.addEventListener("click",toggleItem);

//write functions
function addItem(){
    items.push({
        name:inputAccess.value,
        purchased:false
    });
    renderItems();
}

function delItem(){
    items.splice(Number(deleteAccess.value),1);
    renderItems();
}
function toggleItem(){
    let p=Number(toggleAccess.value);
    if(items[p].purchased==false){
        items[p].purchased=true;
    }else{
         items[p].purchased=false;
    }
    renderItems();
}

function renderItems(){
    output="";
    for(let i=0;i<items.length;i++){
        if(items[i].purchased==false){
            output+=i+" "+items[i].name+" "+"is not purchased 😭"+"\n"
        }else{
            output+=i+" "+items[i].name+" "+"is purchased 🌟"+"\n"
        }
        
    }
    paraAccess.innerText=output;
}