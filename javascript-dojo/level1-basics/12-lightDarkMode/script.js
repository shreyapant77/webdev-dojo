btnAccess=document.querySelector(".btn");
headingAccess=document.querySelector(".heading")
let color=false;

btnAccess.addEventListener("click",nightMode);

function nightMode(){
    if(color==false){
        document.body.style.backgroundColor="black";
        headingAccess.style.color = "white";
        headingAccess.innerText="Night Mode"
        color=true;
    }else{
        document.body.style.backgroundColor="white";
        headingAccess.style.color = "black";
        headingAccess.innerText="Day Mode"
        color=false;
    }
}