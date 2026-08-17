wordAccess=document.querySelector(".word");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");
wAccess=document.querySelector(".w");
definationAccess=document.querySelector(".defination");

btnAccess.addEventListener("click",findWord);

async function findWord(){
    msgAccess.innerText="";
    let word=wordAccess.value.trim();
    let url=`https://api.datamuse.com/words?sp=${word}&md=d&max=1`
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot find this word error 1")
        }
        let data=await response.json();
        if(data.length === 0){
            throw new Error("word not found");
        }
        console.log(data);
        console.log(data[0].defs)
        wAccess.innerText=data[0].word;
        definationAccess.innerText=data[0].defs[0];

    }catch(error){
        console.log(error);
        msgAccess.innerText="cannot find this word error 2";
    }
}