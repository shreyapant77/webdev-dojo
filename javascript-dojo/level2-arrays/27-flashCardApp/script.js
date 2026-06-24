questionAccess=document.querySelector(".ques");
answerAccess=document.querySelector(".answer");
btnAccess=document.querySelector(".toggle");
btnNext=document.querySelector(".next");

let q=[
    {
        question:"what is html?",
        answer:"html is HyperText Markup Language"
    },
    {
        question:"what is css",
        answer:"css stands for cascading style sheets"
    },
    {
        question:"what is http?",
        answer:"http is hyper text transfer protocol"
    },
    {
        question:"what is ssl",
        answer:"ssl is secure socket layer"
    }
];

btnAccess.addEventListener("click",hideShowCard);
btnNext.addEventListener("click",renderCard);
questionAccess.innerText = q[0].question;

let questionCount=0;
let val=false;

function hideShowCard(){
    if(val==false){
        val=true;
        answerAccess.innerText=q[questionCount].answer;
        btnAccess.innerText="hide answer";
    }else{
         val=false;
         answerAccess.innerText="";
         btnAccess.innerText="show answer";
    }
}

function renderCard(){
    if(questionCount<q.length-1){
        questionCount++;
        questionAccess.innerText = q[questionCount].question;
        
    }else{
        questionCount=0;
        questionAccess.innerText = q[questionCount].question;
    }
    answerAccess.innerText="";
    val=false;
    btnAccess.innerText="show answer";
    

    

}