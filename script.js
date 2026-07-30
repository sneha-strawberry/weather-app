const apiKey="9baf0663c3fc73473449c8515e3cdc4a";

async function checkWeather(){

const city=document.getElementById("city").value;

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response=await fetch(apiUrl);

if(response.status==404){

alert("City Not Found");

return;

}

const data=await response.json();

document.getElementById("cityName").innerHTML=data.name;

document.getElementById("temp").innerHTML=data.main.temp+"°C";

document.getElementById("description").innerHTML=data.weather[0].description;

document.getElementById("humidity").innerHTML="Humidity : "+data.main.humidity+"%";

document.getElementById("wind").innerHTML="Wind : "+data.wind.speed+" km/h";

}