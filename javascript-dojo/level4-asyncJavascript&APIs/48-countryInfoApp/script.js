inputAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
cname=document.querySelector(".name");
cpopulation=document.querySelector(".population");
clang=document.querySelector(".language");
ccurr=document.querySelector(".curr");
ccapital=document.querySelector(".cap");

btnAccess.addEventListener("click",getCountry);

async function getCountry(){
    let country_name=inputAccess.value.trim();
    let url = `https://countries.dev/alpha/${encodeURIComponent(country_name)}`;
    console.log(url);
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("unable to fetch country data 1");
        }
        let data=await response.json();
        console.log(data);
        console.log(data.name);
        console.log(data.population);
        console.log(data.languages[0].name);
        cname.innerText=data.name;
        cpopulation.innerText=data.population;


        // clang.innerText=data.languages[0].name;
        //array.map(function(item) {
            // return something;
        // });
        let languages=data.languages.map(function(x){
            return x.name;
        });

        clang.innerText=languages;


        ccurr.innerText=data.currencies[0].name;
        ccapital.innerText=data.capital;



    }catch(error){
        console.log(error);
    }
    
}