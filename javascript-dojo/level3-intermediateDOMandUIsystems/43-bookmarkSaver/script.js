nameAccess=document.querySelector(".bname");
urlAccess=document.querySelector(".burl");

addBtnAccess=document.querySelector(".addBtn");
containerAccess=document.querySelector(".bookmarkContainer");

addBtnAccess.addEventListener("click",addBookmark);

function addBookmark(){
    let bookmark={};
    bookmark.name=nameAccess.value;
    bookmark.url=urlAccess.value;
    let box=document.createElement("div");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    p1.innerText=bookmark.name;
    p2.innerText=bookmark.url;
    box.appendChild(p1);
    box.appendChild(p2);
    containerAccess.appendChild(box);
}