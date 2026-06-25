nameAccess=document.querySelector(".name");
scoreAccess=document.querySelector(".score");
submitBtn=document.querySelector(".btn1");
renderBtn=document.querySelector(".btn2");
paraAccess=document.querySelector(".para");

submitBtn.addEventListener("click",enterPlayer);
renderBtn.addEventListener("click",showBoard);

let players=[];

function enterPlayer(){
    players.push(
        {
            name:nameAccess.value,
            score:Number(scoreAccess.value)
        }
    );
    //this clears the input boxes after adding a player to add next
    nameAccess.value="";
    scoreAccess.value="";
}

function showBoard(){
    let output="";
    for(let i=0;i<players.length;i++){
        output+=players[i].name+" -"+players[i].score+"\n";
    }
    paraAccess.innerText=output;
}
