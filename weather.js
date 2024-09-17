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
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";

    //Weather Conditions
    document.querySelector(".weather-status").innerHTML = data.weather[0].main;
    document.querySelector(".status").style.display = "block";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".status").src = "images status/Cloudy.png";
      document.querySelector(".suggest").innerHTML =
        "Bring umbrella, there is a chance of raining.";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".status").src = "images status/Rainy.png";
      document.querySelector(".suggest").innerHTML =
        "Stay hydrated and avoid sweating, it's raining. Bring umbrella!";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".status").src = "images status/Clear.png";
      document.querySelector(".suggest").innerHTML =
        "Sky is clear, enjoy your day but always stay safe!";
    } else {
      document.querySelector(".suggest").innerHTML = "Data weather not found"; //If there is no data about the weather
    }

    //Console Debugging
    console.log(data);
  } catch (error) {
    alert("Place not found!");
  }
}

//Get Data
searchBtn.addEventListener("click", () => {
  checkWeather(searchBar.value);
});

//Get data when enter is pressed
searchBar.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    checkWeather(searchBar.value);
  }
});
