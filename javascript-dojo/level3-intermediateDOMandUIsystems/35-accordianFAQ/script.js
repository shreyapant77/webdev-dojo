// qAccess=document.querySelector(".q");
// ansAccess=document.querySelector(".ans");
// btnAccess=document.querySelector(".btn");

containerAccess=document.querySelector(".container");

// let store={
//     question:"what is javascript?",
//     answer:"javascript is a programming language",
//     open:false
// };

// btnAccess.addEventListener("click",toggleAnswer);

// qAccess.innerText=store.question;
// function toggleAnswer(){
//     if(store.open==false){
//         store.open=true;
//         ansAccess.innerText=store.answer;
//     }else{
//         store.open=false;
//         ansAccess.innerText="";
//     }
// }

//the above code was for feature 1 only 1 question manually shown
//now this code is for feature 2 which is to show multiple questions and create html dynamically

let faqs=[
    {
        question:"what is html?",
        answer:"html is hyper text markup language.",
        open:false
    },
    {
        question:"what is css?",
        answer:"css is cascading style sheets.",
        open:false
    },
    {
        question:"what is javascript?",
        answer:"javascript is a programming language.",
        open:false
    },
    {
        question:"what is DOM?",
        answer:"DOM is document object model.",
        open:false
    }

];





// function toggleAnswer(){
//     let output="";
//     for(let i=0;i<faqs.length;i++){
//         if(faqs[i].open==true){
//              output+=`<p>${faqs[i].question}</p>
//             <p>${faqs[i].answer}</p>`;
//             faqs.open=false;
//         }else{
//             output+=`<p>${faqs[i].question}</p>`;
//             faqs.open=false;
//         }
       
//     }
//     containerAccess.innerHTML=output;
// }


function initialRender(){
    let output="";
    for(let i=0;i<faqs.length;i++){
        output+=`<button onclick="toggleFAQ(${i})">${faqs[i].question}</button>`;  
        if(faqs[i].open==true){
            output+=`<p>${faqs[i].answer}</p>`;
        }
    }
    containerAccess.innerHTML=output;
}
initialRender();

function toggleFAQ(index){
    faqs[index].open = !faqs[index].open;
    for(let i=0;i<faqs.length;i++){
        if(i!=index){
            faqs[i].open=false;
        }
    }
    initialRender();
}