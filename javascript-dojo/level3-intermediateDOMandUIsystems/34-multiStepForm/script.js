inputAccess=document.querySelector(".inpt1");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");
userDetailsAccess=document.querySelector(".userDetails");

btnAccess.addEventListener("click",pageNext);

let currentUser={};
let users=[];
let val=0;
//0 means name
//1 means email
//2 means password
//3 renderUser
function pageNext(){
    if(val==0){
        currentUser.name=inputAccess.value;
        inputAccess.value="";
    }else if(val==1){
        currentUser.email=inputAccess.value;
        inputAccess.value="";
    }else {//here val is 2
        currentUser.password=inputAccess.value;
        inputAccess.value="";
        users.push(currentUser);
        paraAccess.innerText="form completed"
        currentUser={};
        val=-1;
        renderUser();
        
    }
    val++;
}

function renderUser(){
    let output="";
    for(let i=0;i<users.length;i++){
       output+=users[i].name+" "+users[i].email+" "+users[i].password+"\n";
    }
     userDetailsAccess.innerText=output
   
}