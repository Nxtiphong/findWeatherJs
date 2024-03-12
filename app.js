const apikey = "647a9e25d4ccac44a8a49e746aa1a67d";
const appiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function getWeatherByLocation(city) {
    const response = await fetch(appiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}
// searchBtn.addEventListener("click", () => {
//     getWeatherByLocation(searchBox.value);
// });
const functionName = () => {
    getWeatherByLocation(searchBox.value);
  };
  
getWeatherByLocation();
