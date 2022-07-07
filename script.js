let cityInput = document.querySelector(".search-bar");
let searchEl = document.getElementById('searchbtn')
let apiKey = "78411966c51c6e844033f8e53091e077",
let currentCity = document.querySelector('#city'),
let TempEl = document.querySelector('#Temp');
let WindEl = document.querySelector('#wind');
let HumidityEl = document.querySelector('#Humidity');
let UvEl = documet.querySelector('#UV');
let History = document.getElementById('previousHistory')

let city="";

// connected the Api to get weather based on city name
function cityWeather(city) {
    let apiUrl= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    fetch(apiUrl)
    .then(function(response){
        console.log(response);

//show the new city forcast on the html
        TempEl.innerHTML="Temp" + k2f(response.data.main.temp) + &#176;
        WindEl.innerHTML="Wind" + response.data.wind.speed + "MPH";
        HumidityEl.innerHTML="Humidity" + response.data.main.humidity + &#37;




        })};

   

            
    
  



//activate search btn 
let cityHistory = JASON.parse(localStorage.getItem('search')) || []

searchEl.addEventListener("click",function(){
    let searchbtn = cityInput.value;
    cityWeather(searchbtn);
    cityHistory.push(searchbtn);
    localStorage.setItem('search',JSON.stringify(cityHistory));

}
   
} })
