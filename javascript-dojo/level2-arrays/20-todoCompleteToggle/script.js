//  <h1>todo list</h1>
//         <h2>input feauture</h2>
//         <input class="inpt1" placeholder="enter task you want to do">
//         <button class="btn1">submit a task</button>
//         <h2>delete feature</h2>
//         <input class="del_index" placeholder="tell index of task you want to delete">
//         <button class="btn2">delete a task</button>
//         <h2>toggle task</h2>
//         <input class="toggleTodo" placeholder="enter index of task you want to mark as complete">
//         <button class="btn3">toggle task</button>
//         <h2>render todo list</h2>
//         <p class="para">the todo list will be rendered here</p>
//i have copy pasted html code here so that there is no typo while i write variable names to access things

//access all variables
inputElementAccess=document.querySelector(".inpt1");
submitButtonAccess=document.querySelector(".btn1");

delIndexAccess=document.querySelector(".del_index");
deleteButtonAccess=document.querySelector(".btn2");

toggleIndexAccess=document.querySelector(".toggleTodo");
toggleButtonAccess=document.querySelector(".btn3");

paraAccess=document.querySelector(".para");

//connect all buttons 
submitButtonAccess.addEventListener("click",enterTask);
deleteButtonAccess.addEventListener("click",delTask);
toggleButtonAccess.addEventListener("click",toggleTask);


//declare global variables
let task=[];//here task is our only variable which is an array which will have objects as elements
let output="";

//functions
function enterTask(){
    task.push({
        text:inputElementAccess.value,
        completed:false
    });
    renderTask();
    
}


function delTask(){
    task.splice(Number(delIndexAccess.value),1);
    renderTask();

}

function toggleTask(){
    let p=Number(toggleIndexAccess.value);
    task[p].completed=true;
    renderTask();
}

function renderTask(){
    output="";
    for(let i=0;i<task.length;i++){
        let val="not complete ❌";
        if(task[i].completed==true){
            val="task completed ✅"
        }
        output+="Task Name: "+task[i].text+" Task Status"+val +"\n";
    }
    paraAccess.innerText=output;
}