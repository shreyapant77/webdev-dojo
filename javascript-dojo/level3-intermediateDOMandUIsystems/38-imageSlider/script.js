prevBtnAccess=document.querySelector(".prev");
imageAccess=document.querySelector(".img1");
nxtBtnAccess=document.querySelector(".nxt");

currIdx=0;

prevBtnAccess.addEventListener("click",goToPrev);
nxtBtnAccess.addEventListener("click",goToNext);


let images = [
    "https://picsum.photos/400/300?1",
    "https://picsum.photos/400/300?2",
    "https://picsum.photos/400/300?3"
];
imageAccess.src = images[0];
function goToPrev(){
    if(currIdx>0){
        currIdx--;
    }else{
        currIdx=images.length-1;
    }
    imageAccess.src=images[currIdx];

}

function goToNext(){
    if(currIdx!=images.length-1){
        currIdx++;
    }else{
        currIdx=0;
    }
    imageAccess.src=images[currIdx];

}