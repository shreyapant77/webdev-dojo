        // <h1>todo with delete feauture</h1>
        // <h2>this is add feature</h2>
        // <input class="inpt" placeholder="enter element you want to add">
        // <button class="update_btn"></button>
        // <h2>this is delete feature</h2>
        // <input class="del_index" placeholder="enter index of element you want to delete">
        // <input class="del_number" placeholder="enter number of elements you want to delete">
        // <button class="delete_btn">delete button</button>
        // <h2>this feature renders the todo list after every update</h2>
        // <p class="para">updated tasks will be shown here</p>
        //I added the html here so that there is no typo while i access class names


//define all variables        
let inputAccess=document.querySelector(".inpt");
let updateBtnAccess=document.querySelector(".update_btn");
let del_indexAccess=document.querySelector(".del_index");
let del_numberAccess=document.querySelector(".del_number");
let deleteBtnAccess=document.querySelector(".delete_btn");
let paraAccess=document.querySelector(".para");

//connect buttons to functions
updateBtnAccess.addEventListener("click",updateTodo);
deleteBtnAccess.addEventListener("click",deleteTodo);

//define global variables
let task=[];

//define all functions
function updateTodo(){
    task.push(inputAccess.value);

    let output="";
    for(let i=0;i<task.length;i++){
        output+=(i)+" "+ task[i]+"\n";
    }
    paraAccess.innerText=output;

}

function deleteTodo(){
    task.splice(Number(del_indexAccess.value),Number(del_numberAccess.value));

    let output="";
    for(let i=0;i<task.length;i++){
        output+=(i)+" "+ task[i]+"\n";
    }
    paraAccess.innerText=output;

}
