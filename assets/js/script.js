var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var cityName = document.querySelector('.city');
var country = document.querySelector('.country');
var dateTag = document.querySelector('.dateTag');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var feelsLike =document.querySelector('feelsLike');

/*('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')*/


/* listen for a click on search button

use queryselector all
use addeventlistener
*/

function getForecast(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')
        .then(response => response.json())
        .then(data=>{
            var cityNameValue =data['name'];
            var countryNameValue =data['sys']['country'];
            var weatherValue =data['weather'][0]['description'];
            var humidityValue =data['main']['humidity'];
            var feelsLike =data['main']['feels_like'];
        

            //var feelslike =date.main.feels_like;
            
            
            cityName.innerHTML="City: " + cityNameValue;
            country.innerHTML="Country: " + countryNameValue;
            weather.innerHTML="Weather: " + weatherValue;
            humidity.innerHTML="Humidity: " + humidityValue;
            feelsLike.innerHTML="Humidity: " + feelsLike;

            
        })
        .catch(err=> alert("Wrong City Name!"))
       
}

submitBtn.addEventListener("click", getForecast)



/*var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
 $("#currentDay").text(currentDay);*/