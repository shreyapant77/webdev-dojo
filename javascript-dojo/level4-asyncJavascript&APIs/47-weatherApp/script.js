cityAccess=document.querySelector(".city");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");
humidityAccess=document.querySelector(".humidity");
tempAccess=document.querySelector(".temperature");
windAccess=document.querySelector(".wind");
weatherCodeAccess=document.querySelector(".code");

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

        let weatherUrl =`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
        let weatherResponse=await fetch(weatherUrl);
        if(!weatherResponse.ok){
            throw new Error("failed to fetch weather data error 2");
        }
        let weatherData=await weatherResponse.json();

        // console.log(weatherData);

        humidityAccess.innerText="humidity:"+weatherData.current.relative_humidity_2m;
        tempAccess.innerText="temperature:"+weatherData.current.temperature_2m;
        windAccess.innerText="wind speed:"+weatherData.current.wind_speed_10m;
        weatherCodeAccess.innerText="weather code:"+weatherData.current.weather_code;





    }
    catch(error){
        console.log(error);
    }
    
}