var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var cityName = document.querySelector('.city');
var storedCity = document.querySelector('.storedCitiesOutput');
var dayName = document.querySelector('.dayName');
var weather = document.querySelector('.weather');
var humidity = document.querySelector('.humidity');
var temperature = document.querySelector('.temp');
var locationIcon = document.querySelector('.weather-icon');




function storedCities(){

    var city = document.getElementById("searchByCityName").value;
    
    if(localStorage.getItem("city") === null)
    //first value to be stored
    var cityInArray = [];
    else
    //Some value already exist in localstorage
    cityInArray =JSON.parse(localStorage.getItem("city"));
    
    //check if the city is already in the array if not push city
    if(cityInArray.indexOf(city) === -1) {
        cityInArray.push(city);
    //update localStorage
      
           localStorage.setItem("city",JSON.stringify(cityInArray));

       document.getElementById("storedCitiesOutput").innerHTML +=`${city}<br />`;}
        

};

function getForecast(){
    
 if(city == ""){
     alert('Please enter a city')

 }
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')
    
       
    .then(response => response.json())
        
        //.then(data => console.log(data))
        .then(data=>{
            if(data.cod === '404'){
                alert('City Not Found');
                return;
            } 
            else {
            var cityNameValue =data.name;
            var weatherValue =data.weather[0].description;
            var humidityValue =data.main.humidity;
            var tempValue= Math.round(parseFloat(data.main.temp* 9/5) - 459.67) + "°F";

            var icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

            cityName.innerHTML=cityNameValue;
            weather.innerHTML="Weather: " + weatherValue;
            humidity.innerHTML="Humidity: " + humidityValue + "%";
            temperature.innerHTML="Temp: " + tempValue;
            locationIcon.innerHTML = icon;
         
            var today  = new Date();
            document.getElementById("todaysDate").innerHTML = today.toLocaleDateString("en-US");
			
            storedCities();
                   
        }})
               
}

function getFiveDayForecast(){
  
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city.value+'&appid=7f397d92f2a24c5b09d57bf25512a15c')
    .then(response=> response.json())
    .then(data=>{
        console.log(data);
        
        
        // data.list.splice(5);
        // for(i=0; i<5; i++){
        //     document.getElementById("day" +(i+1)+"day").innerHTML= moment.unix(data.list[i].dt).format('dddd');
        //      document.getElementById("day" +(i+1)+"Temp").innerHTML="Temperature: " +Number((data.list[i].main.temp_min * 9/5) - 459.67).toFixed(0) + "°F";
        //     document.getElementById("day" +(i+1)+"Humid").innerHTML="Humidity: " +Number(data.list[i].main.humidity)+ "%";	
        //     document.getElementById("day" +(i+1)+"Speed").innerHTML="Speed: " +Number(data.list[i].wind.speed)+ " mph";		
        //      document.getElementById("day" +(i+1)+"Condition").innerHTML= "*** " + data.list[i].weather[0].description;					
        
  
        //          document.getElementById("img" +(i+1)).src="http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";			
        //     }
        
        
    })
    
    //.catch(err=>alert("something went wrong"))
     
}



//  function checkDay(day){
//      var d = new Date();
//      var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//      if (day + d.getDay()>6){
//          return day + d.getDay()-7;

//      } else {
//         return day + d.getDay();
//      }

//  }

//     for(i = 0; i<5; i++){
//     document.getElementById("day" + (i+1)+"day").innerHTML = weekday([checkDay(i)].dt);
//     }
 


function clearStoredCities(){
    if(localStorage) { // Check if the localStorage object exists

            localStorage.clear()  //clears the localstorage
            location.reload();   //clears the text on the page       
        }
}

//submitBtn.addEventListener("click", storedCities )
submitBtn.addEventListener("click", getForecast )
submitBtn.addEventListener("click", getFiveDayForecast) 