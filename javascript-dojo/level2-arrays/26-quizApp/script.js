questionAccess=document.querySelector(".questions");
answerAccess=document.querySelector(".answer");
btnAccess=document.querySelector(".btn1");
scoreAccess=document.querySelector(".score")

let score=0;
btnAccess.addEventListener("click",quizApp);

let q=[
    {   question:"what is the capital of India?",
        answer:"Delhi"   
    },
    {
        question:"closest planet to sun is ?",
        answer:"Mercury"
    },
    {
        question:"longest river in the world?",
        answer:"Nile"
    },
    {
        question:"national bird of india?",
        answer:"Peacock"
    }
];

questionAccess.innerText=q[0].question;
let currentQuestion=0;
function quizApp(){
    if(currentQuestion<q.length){
         if(answerAccess.value==q[currentQuestion].answer){
            score++;
         }
         scoreAccess.innerText=score;
    }else{
    questionAccess.innerText="Quiz Finished!";
    }
currentQuestion++;
answerAccess.value = "";

if(currentQuestion < q.length){
    questionAccess.innerText=q[currentQuestion].question;
}else{
    questionAccess.innerText="Quiz Finished!";
}
}