var submitBtn =document.querySelector('.submitBtn')
var city = document.querySelector('.searchByCityName');
var dateTag = document.querySelector('.dateTag');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex');
/*('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')*/


/* listen for a click on search button

use queryselector all
use addeventlistener
*/

function getForecast(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=7dfee20f8b9610de4e24031ae9190e5d')
        .then(response => response.json())
        .then(data =>console.log(data))
        /*.then(data=>{
            var wind =data['wind']

        })
        */
}

submitBtn.addEventListener("click", getForecast)



/*var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
 $("#currentDay").text(currentDay);*/