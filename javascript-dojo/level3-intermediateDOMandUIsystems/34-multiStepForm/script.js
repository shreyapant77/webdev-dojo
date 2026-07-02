inputAccess=document.querySelector(".inpt1");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");
userDetailsAccess=document.querySelector(".userDetails");
formStepAccess=document.querySelector(".formStep");
prevBtnAccess=document.querySelector(".btn2");
submitBtnAccess=document.querySelector(".btn3");

btnAccess.addEventListener("click",pageNext);
prevBtnAccess.addEventListener("click",pagePrev);
submitBtnAccess.addEventListener("click",submitForm);

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
  
   }
   if(val==1){
     currentUser.email=inputAccess.value;
  
   }
   if(val==2){
      currentUser.password=inputAccess.value;
     
   }
   if(val<=1){
        val++;
   }
   renderPage();
    
}
function pagePrev(){
    if(val>=1){
        val--;
    }
    renderPage();
}

function renderPage(){
     if(val==0){
        formStepAccess.innerText="Step 1:Enter your Name ";
        inputAccess.type="text";
        inputAccess.placeholder="your name here";

         inputAccess.value = currentUser.name || "";
    }
    if(val==1){
       
        formStepAccess.innerText="Step 2:Enter your Email id ";
        inputAccess.type="text";
        inputAccess.placeholder="your email id here";   

         inputAccess.value = currentUser.email || "";
    }if(val==2){
        
        formStepAccess.innerText="Step 3:Enter your Password ";
        inputAccess.type="password";
        inputAccess.placeholder="your password here";

         inputAccess.value = currentUser.password || "";
    }

}
function submitForm(){
    users.push(currentUser);
    currentUser={};
    renderUser();
    val=0;
    renderPage();
}

function renderUser(){
    let output="";
    for(let i=0;i<users.length;i++){
       output+=users[i].name+" "+users[i].email+" "+users[i].password+"\n";
    }
     userDetailsAccess.innerText=output
   
}