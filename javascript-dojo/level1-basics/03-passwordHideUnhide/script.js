//dom selector
let inputAccess=document.querySelector(".inpt");
let btnAccess=document.querySelector(".btn");

//event listener
btnAccess.addEventListener("click",togglePassword);

//functon
function togglePassword(){
    if(inputAccess.type=="text"){
        inputAccess.type="password";
        btnAccess.innerText="show";
    }else{
        inputAccess.type="text";
        btnAccess.innerText="hide";
    }
}