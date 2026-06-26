inputAccess=document.querySelector(".inpt1");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para")
toggleAccess=document.querySelector(".inpt2");
toggleBtnAccess=document.querySelector(".btn2");
deleteAccess=document.querySelector(".inpt3");
deleteBtnAccess=document.querySelector(".btn3");

btnAccess.addEventListener("click",addHabit);
toggleBtnAccess.addEventListener("click",toggleHabit);
deleteBtnAccess.addEventListener("click",delHabit);

let habits=[];
function addHabit(){
    habits.push(
        {
            name:inputAccess.value,
            completed:false

        }
    );
    inputAccess.value="";
    renderHabits();
}
function renderHabits(){
    let output="";
    for(let i=0;i<habits.length;i++){
        if(habits[i].completed==false){
            output+=habits[i].name+" "+"task incomplete ❌"+"\n";
        }else{
            output+=habits[i].name+" "+"task complete ✅"+"\n";
        }
        
    }
    paraAccess.innerText=output;
}

function toggleHabit(){
    if(habits[Number(toggleAccess.value)-1].completed==false){
        habits[Number(toggleAccess.value)-1].completed=true;
    }else{
        habits[Number(toggleAccess.value)-1].completed=false;
    }
    toggleAccess.value="";
    renderHabits();
    
}

function delHabit(){
    habits.splice(Number(deleteAccess.value)-1,1);
    deleteAccess.value="";
    renderHabits();
}