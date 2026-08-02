textAccess=document.querySelector(".notes");
btnAccess=document.querySelector(".btn");
containerAccess=document.querySelector(".container");

btnAccess.addEventListener("click",addStickyNote);

function addStickyNote(){
    let noteBox=document.createElement("div");
    let note=document.createElement("p");
    let delBtn=document.createElement("button");
    delBtn.innerText="delete Note";
    noteBox.appendChild(note);
    noteBox.appendChild(delBtn);
    note.innerText=textAccess.value;
    containerAccess.appendChild(noteBox);
    delBtn.addEventListener("click",function(){
        noteBox.remove();
    });
    textAccess.value="";
}