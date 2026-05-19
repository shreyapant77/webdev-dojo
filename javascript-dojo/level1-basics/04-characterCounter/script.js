inputAccess=document.querySelector(".first");
countAccess=document.querySelector(".second");

inputAccess.addEventListener("input",countChars);

function countChars(){
    countAccess.innerText=inputAccess.value.length;
}