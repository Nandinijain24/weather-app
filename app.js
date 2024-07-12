let inputBox = document.querySelector(".input-box");
let searchBtn = document.getElementById('searchBtn');
let weather_img= document.querySelector(".weather-img");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let humidity = document.getElementById('humidity');
let wind_speed = document.getElementById('wind-speed');

async function checkweather(city){
const api_key="35e110c08f40d32dac5b4c2ba068c277";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data= await fetch(`${url}`).then(response=>response.json());

temperature.innerHTML= `${Math.round(weather_data.main.temp -273.15)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;

switch(weather_data.weather[0].main){
     case 'Clouds':
         weather_img.src = "/sunny.webp";
         break;
     case 'Clear':
         weather_img.src = "/clear.png";
         break;
     case 'Rain':
         weather_img.src = "/rain.jpeg";
         break;
     case 'Haze':
         weather_img.src = "/mist.png";
         break;
     case 'Snow':
         weather_img.src = "/snow.jpeg";
         break;

 }
 console.log(weather_img);
console.log(weather_data);
 
}


searchBtn.addEventListener('click',()=>{
     checkweather(inputBox.value)
});
