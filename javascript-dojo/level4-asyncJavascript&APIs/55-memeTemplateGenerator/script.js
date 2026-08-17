templateAccess=document.querySelector(".template");
topAccess=document.querySelector(".topText");
bottomAccess=document.querySelector(".bottomText");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");
memeAccess=document.querySelector(".meme");
imgAccess=document.querySelector(".dp");


btnAccess.addEventListener("click",getMeme);
let memes = [];


async function getMeme(){
    let url=`https://api.imgflip.com/get_memes`;
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot find meme error 1");
        }
        let ans=await response.json();
        console.log(ans);
        console.log(ans.data.memes[0].name);
        console.log(ans.data.memes[0].url);
        memes=ans.data.memes;
        for(let m of memes){
            // let meme=m;
            let option=document.createElement("option");

            option.value=m.id;
            option.innerText=m.name;

            templateAccess.appendChild(option);
        }
        templateAccess.addEventListener("change",function(){
            // console.log(templateAccess.value);
            let selectedId=templateAccess.value;
            let selectedMeme=memes.find(function(meme){
                return meme.id===selectedId;
            });
            console.log(selectedMeme);
            imgAccess.src=selectedMeme.url;
        });
        
    }
    catch(error){
        console.log(error);
    }
}
