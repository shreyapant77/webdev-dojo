questionAccess=document.querySelector(".ques");
answerAccess=document.querySelector(".answer");
btnAccess=document.querySelector(".toggle");

let q=[
    {
    question:"what is html?",
    answer:"html is HyperText Markup Language"
    }
];

btnAccess.addEventListener("click",hideShowCard);
questionAccess.innerText = q[0].question;

let val=false;
function hideShowCard(){
    if(val==false){
        val=true;
        answerAccess.innerText=q[0].answer;
        btnAccess.innerText="hide answer";
    }else{
         val=false;
         answerAccess.innerText="";
         btnAccess.innerText="show answer";
    }
}