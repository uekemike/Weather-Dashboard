var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var cityName = document.querySelector('.city');
var storedCity = document.querySelector('.storedCitiesOutput');
var dayName = document.querySelector('.dayName');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var temperature = document.querySelector('.temp');
var locationIcon = document.querySelector('.weather-icon');




// function getDate(){
//     var today  = new Date();
//     document.getElementById("todaysDate").innerHTML = today.toLocaleDateString("en-US");  
// }
function storedCities(){

  var key = city.value;
  var value = city.value;
  
  if (key && value)
  localStorage.setItem(key, 'city');
  
  
  };

  for (i=0; i < localStorage.length; i++){
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		
		document.getElementById("storedCitiesOutput").innerHTML +=`${key}<br />`;
	
//displayClearCityButton();	
}



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
  
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=7f397d92f2a24c5b09d57bf25512a15c')
        .then(response=> response.json())
        .then(data=>{
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"day").innerHTML=(data.list[i].dt);
                        }
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Temp").innerHTML="Temperature: " +Number(data.list[i].main.temp_min -288.53).toFixed(1) + "°";
                    
            }
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Humid").innerHTML="Humidity: " +Number(data.list[i].main.humidity)+ "%";					
            }
            
            for(i=0; i<5; i++){
                    document.getElementById("day" +(i+1)+"Speed").innerHTML="Speed: " +Number(data.list[i].wind.speed)+ " mph";					
        }
            //for(i=0; i<5; i++){
                   // document.getElementById("day" +(i+1)+Icon).src="http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png";			
            //}
            
        })
        
        //.catch(err=>alert("something went wrong"))
         
     }

// function displayClearCityButton(){
	
// 	var hidden = false;
//     function action() {
//         hidden = !hidden;
//         if(hidden) {
//             document.getElementById('clearCitiesOutput').style.visibility = 'hidden';
//         } else {
//             document.getElementById('clearCitiesOutput').style.visibility = 'visible';
//         }
//     }
// }

function clearStoredCities(){
        if(localStorage) { // Check if the localStorage object exists

                localStorage.clear()  //clears the localstorage
            
            } else {
            
                alert("Sorry, no local storage."); //an alert if localstorage is non-existing
            }
}


submitBtn.addEventListener("click", storedCities )
submitBtn.addEventListener("click", getForecast )
submitBtn.addEventListener("click", getFiveDayForecast) 