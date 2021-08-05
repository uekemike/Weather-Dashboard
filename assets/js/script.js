var weatherkey ="7dfee20f8b9610de4e24031ae9190e5d";
var city = document.querySelector("#site-search");
var searchBtn = document.querySelector("#search-state")
var url="http://api.openweathermap.org/geo/1.0/direct?q="



/* listen for a click on city or click on search button to get the

use queryselector all
use addeventlistener
*/

function getForecast(){
    var citySearch = city.value;
    console.log(citySearch);
    var searchUrl = `${url}${city.value}&limit=5&appid=${weatherkey}`;
    console.log(searchUrl);
   

    fetch(searchUrl)
        .then(function(data){
            console.log(data);

        })
}

searchBtn.addEventListener("click", getForecast)



/*var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
 $("#currentDay").text(currentDay);*/