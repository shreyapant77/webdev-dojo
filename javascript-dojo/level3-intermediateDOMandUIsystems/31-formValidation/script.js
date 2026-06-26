inputAccess=document.querySelector(".inpt1");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");
emailAccess=document.querySelector(".inpt2");
passwordAccess=document.querySelector(".inpt3");

btnAccess.addEventListener("click",submitName);

function submitName(){
    if(inputAccess.value.length<3 ){
        paraAccess.innerText="please make sure name has more than 2 characters"
    }else if(emailAccess.value.includes("@")==false ){
        paraAccess.innerText="make sure the email has @ sign "
    }else if(passwordAccess.value.length<8){
        paraAccess.innerText="make sure the password is atleast 8 characters long"
    }else{
        paraAccess.innerText="successful✅"
    }
}