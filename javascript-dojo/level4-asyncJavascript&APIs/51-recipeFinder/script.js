inptAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");

nameAccess=document.querySelector(".name");
instructionsAccess=document.querySelector(".instructions");
areaAccess=document.querySelector(".area")
countryAccess=document.querySelector(".country");
categoryAccess=document.querySelector(".category");
ingridientsAccess=document.querySelector(".ingridients");

imagAccess=document.querySelector(".dp");

btnAccess.addEventListener("click",getRecipe);


async function getRecipe(){
    msgAccess.innerText="loading recipe";
    let name=inptAccess.value.trim();
    let url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}&utm_source=chatgpt.com`;
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot fetch this recipe error1");
        }
        msgAccess.innerText="";
        let data=await response.json();

        if(data.meals==null){
            throw new Error("recipe not found error 2");
        }


        console.log(data);
        nameAccess.innerText=data.meals[0].strMeal;
        instructionsAccess.innerText=data.meals[0].strInstructions;
        areaAccess.innerText=data.meals[0].strArea;
        countryAccess.innerText=data.meals[0].strCountry;
        categoryAccess.innerText=data.meals[0].strCategory;

       
        let m=data.meals[0];
        let iList="";
        for(let i=1;i<=20;i++){
            
            let x=m["strIngredient"+i];
            if(x!==""){
                iList+=x+"\n";
            }
        }
        ingridientsAccess.innerText=iList;

        imagAccess.src=data.meals[0].strMealThumb;
    }
    catch(error){
        console.log(error);
        msgAccess.innerText="could not find that recipe"
    }
}