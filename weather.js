//Variables, API Key, URL, Search Bar and Button
const apiKey = "31888860aa735911d9686859f1bb463b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

//Fetch Data

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    var data = await response.json();

    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);

    console.log(data);
    //Weather Condition
    document.querySelector(".weather-status").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".status").innerHTML = "☁️";
      document.querySelector(".suggest").innerHTML =
        "Bring umbrella, there is a chance of raining.";
    } else if (data.weather[0].main == "Sunny") {
      document.querySelector(".status").innerHTML = "☀️";
      document.querySelector(".suggest").innerHTML =
        "Bring sunscreen, it's a bright day.";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".status").innerHTML = "🌧️";
      document.querySelector(".suggest").innerHTML =
        "Stay hydrated and avoid sweating, it's raining. Bring umbrella!";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".status").innerHTML = "🌇";
      document.querySelector(".suggest").innerHTML =
        "Sky is clear, enjoy your day but always stay safe!";
    } else {
      document.querySelector(".suggest").innerHTML = "Data weather not found";
    }
  } catch (error) {
    alert("Place not found!");
  }
}
//Get Data
searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});
