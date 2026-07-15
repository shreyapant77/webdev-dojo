openBtnAccess=document.querySelector(".openModal");
modalAccess=document.querySelector(".modal");
closeBtnAccess=document.querySelector(".closeModal");
overlayAccess=document.querySelector(".overlay");

let modalIsOpen=false;
//hiding modal element initially
modalAccess.style.display="none";
modalAccess.addEventListener("click", function(event){
    event.stopPropagation();
});
// openBtnAccess.addEventListener("click",togglePopup);
openBtnAccess.addEventListener("click",openPopup);

// closeBtnAccess.addEventListener("click",togglePopup);
closeBtnAccess.addEventListener("click",closePopup);

overlayAccess.addEventListener("click",closePopup);
// function togglePopup(){
//     if(modalIsOpen==false){
//         modalIsOpen=true;
//         modalAccess.style.display="block";

//     }else{
//         modalIsOpen=false;
//          modalAccess.style.display="none";
//     }
// }
function openPopup(){
    modalIsOpen=true;
    modalAccess.style.display="block";//allows to show
}

function closePopup(){
    modalIsOpen=false;
    modalAccess.style.display="none";//allows to hide
}