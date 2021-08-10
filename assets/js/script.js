var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var cityName = document.querySelector('.city');
var country = document.querySelector('.country');
//var dateTag = document.querySelector('.dateTag');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var locationIcon = document.querySelector('.weather-icon');



function getForecast(){
 


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data=>{
            var cityNameValue =data.name;
            var countryNameValue =data.sys.country;
            var weatherValue =data.weather[0].description;
            //var humidityValue =data.main.temp;
            var humidityValue= Math.round(((parseFloat(data.main.temp)-288.53)*1.8)+32)+ "°";

            var icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

            cityName.innerHTML="City: " + cityNameValue;
            country.innerHTML="Country: " + countryNameValue;
            weather.innerHTML="Weather: " + weatherValue;
            humidity.innerHTML="Humidity: " + humidityValue;
            locationIcon.innerHTML = icon;
           
                    
        })
               
}

submitBtn.addEventListener("click", getForecast)


function getCurrentDay(){
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay);}
/**/

//'https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d'
//'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d'