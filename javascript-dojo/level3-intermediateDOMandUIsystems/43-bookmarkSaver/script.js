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

    let visitBtn=document.createElement("button");

    visitBtn.addEventListener("click",function(){
        window.open(bookmark.url,"_blank");
    });

    let delBtn=document.createElement("button");
    delBtn.innerText="delete bookmark"

    delBtn.addEventListener("click",function(){
        box.remove();
    })

    p1.innerText=bookmark.name;
    p2.innerText=bookmark.url;
    visitBtn.innerText="visit now"
    box.appendChild(p1);
    box.appendChild(p2);
    box.appendChild(visitBtn);
    box.appendChild(delBtn);
    containerAccess.appendChild(box);
}