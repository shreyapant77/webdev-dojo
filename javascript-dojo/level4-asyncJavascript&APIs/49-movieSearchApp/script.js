inptAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
nameAccess=document.querySelector(".name");
pAccess=document.querySelector(".premiered");
sAccess=document.querySelector(".summary");
gAcess=document.querySelector(".genres");
imgAccess=document.querySelector(".poster");

btnAccess.addEventListener("click",getMovie);

async function getMovie(){
    let movie=inptAccess.value.trim();
    let url=`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(movie)}`;
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot fetch movie error 1");
        }
        let data=await response.json();
        console.log(data);
        nameAccess.innerText=data.name;
        pAccess.innerText=data.premiered;
        sAccess.innerText=data.summary;
        //use of map function where genres is an array
        let y=data.genres.map(function(x){
            return x;
        });
        gAcess.innerText=y;

        imgAccess.src=data.image.medium;



    }
    catch(error){
        console.log(error);
    }

}