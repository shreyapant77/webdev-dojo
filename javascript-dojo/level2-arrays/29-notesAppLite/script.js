txtAccess=document.querySelector(".txt");
btnAccess=document.querySelector(".btn1");
paraAccess=document.querySelector(".para");
delIndex=document.querySelector(".del");
delBtn=document.querySelector(".btn2");
editIndex=document.querySelector(".edit");
editAccess=document.querySelector(".editTxt");
editBtn=document.querySelector(".btn3");

btnAccess.addEventListener("click",addNote);
delBtn.addEventListener("click",delNote);
editBtn.addEventListener("click",editNote);

let notes=[];

function addNote(){
    notes.push(txtAccess.value);
    txtAccess.value="";
    renderNotes();
}
function renderNotes(){
    let output="";
    for(let i=0;i<notes.length;i++){
        output+="Note "+(i+1)+": "+notes[i]+"\n";
    }
    paraAccess.innerText=output;
}
function delNote(){
    notes.splice(Number(delIndex.value)-1,1);
    renderNotes();
}
function editNote(){
    notes[Number(editIndex.value)-1]=editAccess.value;
    renderNotes();
}