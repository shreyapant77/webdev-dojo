bgAccess=document.querySelector(".bgColor");
txtAccess=document.querySelector(".txtColor");
fontSizeAccess=document.querySelector(".fSize");

btnAccess=document.querySelector(".btn");

btnAccess.addEventListener("click",themeChange);

function themeChange(){
    document.body.style.backgroundColor=bgAccess.value;
    document.body.style.color=txtAccess.value;
    document.body.style.fontSize=fontSizeAccess.value;
}