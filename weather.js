//Variables, API Key, URL, Search Bar and BUtton
const apiKey = "31888860aa735911d9686859f1bb463b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

//Fetch Data

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
}

//Get Data
searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
