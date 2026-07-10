openBtnAccess=document.querySelector(".openModal");
modalAccess=document.querySelector(".modal");
closeBtnAccess=document.querySelector(".closeModal");

let modalIsOpen=false;
//hiding modal element initially
modalAccess.style.display="none";

openBtnAccess.addEventListener("click",togglePopup);
closeBtnAccess.addEventListener("click",togglePopup);

function togglePopup(){
    if(modalIsOpen==false){
        modalIsOpen=true;
        modalAccess.style.display="block";

    }else{
        modalIsOpen=false;
         modalAccess.style.display="none";
    }
}