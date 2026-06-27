inputAccess=document.querySelector(".inpt1");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");
passwordAccess=document.querySelector(".inpt2");

let users={
    username:"admin",
    password:"123456"
}

btnAccess.addEventListener("click",userVerify);

function userVerify(){
    if(inputAccess.value==users.username && passwordAccess.value==users.password){
        paraAccess.innerText="welcome admin🎯"
    }else if(inputAccess.value!=users.username){
        paraAccess.innerText="incorrect user ❌"
    }else{
         paraAccess.innerText="incorrect password ❌"
    }
    inputAccess.value="";
    passwordAccess.value="";
}