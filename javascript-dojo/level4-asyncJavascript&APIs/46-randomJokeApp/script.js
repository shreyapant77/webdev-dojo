setupAccess=document.querySelector(".setup");
punchlineAccess=document.querySelector(".punchline");
btnAcess=document.querySelector(".btn");

btnAcess.addEventListener("click",getJoke);

async function getJoke(){
    setupAccess.innerText = "Loading joke...";
    punchlineAccess.innerText = "";
    try{
        btnAcess.disabled = true;
        let response=await fetch("https://official-joke-api.appspot.com/random_joke");
        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }
        let data=await response.json();
        console.log(data);
        setupAccess.innerText=data.setup;
        punchlineAccess.innerText=data.punchline;
        
    }
    catch(error){
        console.log(error);
        setupAccess.innerText="there was an error loading the joke please try again";
         punchlineAccess.innerText="";
    }
     finally {
        btnAcess.disabled = false;
    }
    
}