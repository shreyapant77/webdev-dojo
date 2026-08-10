cityAccess=document.querySelector(".city");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");
humidityAccess=document.querySelector(".humidity");
tempAccess=document.querySelector(".temperature");
windAccess=document.querySelector(".wind");
conditionAccess=document.querySelector(".condition");

btnAccess.addEventListener("click",getWeather);


async function getWeather(){
    let city=cityAccess.value.trim();
    if(city===""){
        msgAccess.innerText="please enter a valid city name ";
        return;
    }
    
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    
    try{
        let response=await fetch(url);

        if(!response.ok){
            throw new Error("failed to fetch weather");
        }

        let data=await response.json();
        console.log(data);
        let latitude=data.results[0].latitude;
        let longitude=data.results[0].longitude;

        console.log(latitude);
        console.log(longitude);


    }
    catch(error){
        console.log(error);
    }
    
}