var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var cityName = document.querySelector('.city');
var dayName = document.querySelector('.dayName');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var temperature = document.querySelector('.temp');
var locationIcon = document.querySelector('.weather-icon');



// function getDate(){
//     var today  = new Date();
//     document.getElementById("todaysDate").innerHTML = today.toLocaleDateString("en-US");
   
// }


function getForecast(){
 
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(data=>{
            var cityNameValue =data.name;
            var weatherValue =data.weather[0].description;
            var humidityValue =data.main.humidity;
            var tempValue= Math.round(((parseFloat(data.main.temp)-288.53)*1.8)+32)+ "°";

            var icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

            cityName.innerHTML=cityNameValue;
            weather.innerHTML="Weather: " + weatherValue;
            humidity.innerHTML="Humidity: " + humidityValue;
            temperature.innerHTML="Temp: " + tempValue;
            locationIcon.innerHTML = icon;
         
            var today  = new Date();
            document.getElementById("todaysDate").innerHTML = today.toLocaleDateString("en-US");
                   
        })
               
}

function getFiveDayForecast(){
    var submitBtn =document.getElementById('submitBtn');
    var city = document.getElementById('cityInput');
    
        
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=lagos&appid=7f397d92f2a24c5b09d57bf25512a15c')
        .then(response=> response.json())
        .then(data=>{
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Temp").innerHTML="Temperature: " +Number(data.list[i].main.temp_min -288.53).toFixed(1) + "°";
                    
            }
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Humid").innerHTML="Humidity: " +Number(data.list[i].main.humidity);					
            }
            
            for(i=0; i<5; i++){
                document.getElementById("day" +(i+1)+"Speed").innerHTML="Speed: " +Number(data.list[i].wind.speed);					
        }
            for(i=0; i<5; i++){
                    document.getElementById("img" +(i+1)).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";			
            }
            
        })
        
        //.catch(err=>alert("something went wrong"))
         
     }


submitBtn.addEventListener("click", getForecast )
//submitBtn.addEventListener("click", getDate) 
submitBtn.addEventListener("click", getFiveDayForecast) 

function getCurrentDay(){
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay);}
/**/

//'https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d'
//'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d'