paraAccess=document.querySelector(".para");

document.addEventListener("keydown",function(event){
    paraAccess.innerText=`eventKey: ${event.key}
     code:${event.code} 
     crtl key pressed?${event.ctrlKey} 
     shift key pressed?${event.shiftKey} 
     alt key pressed?${event.altKey}`;
});