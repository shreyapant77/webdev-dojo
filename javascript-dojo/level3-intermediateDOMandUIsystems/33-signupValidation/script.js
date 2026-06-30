userNameAccess=document.querySelector(".inpt1");
passwordAccess=document.querySelector(".inpt2");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");

btnAccess.addEventListener("click",addUser);

let users=[];
function addUser(){
    let val=true;
    for(let i=0;i<users.length;i++){
        if(users[i].username==userNameAccess.value){
            val=false;
            break;
        }
    }
    if(val==true){
        users.push({
        username:userNameAccess.value,
        password:passwordAccess.value
        });
        paraAccess.innerText="user successfully added"
    }else{
        paraAccess.innerText="this username already exists"
    }



    
    userNameAccess.value = "";
    passwordAccess.value = "";
}