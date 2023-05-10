let cityIndex = [
  {
    name: "Paris",
    temperature: 45,
    humidity: 81,
  },
  {
    name: "San Francisco",
    temperature: 51,
    humidity: 81,
  },
  {
    name: "Sydney",
    temperature: 69,
    humidity: 61,
  },
  {
    name: "Mexico City",
    temperature: 58,
    humidity: 67,
  },
  {
    name: "Bogota",
    temperature: 53,
    humidity: 95,
  },
  {
    name: "Florence",
    temperature: 53,
    humidity: 60,
  },
];
console.log(cityIndex);
function weatherApp() {
  let cityName = prompt("Enter a city");
  if (cityName === cityIndex) {
    alert(
      `It is currently ${cityIndex.temperature} in ${cityIndex} with a humidity of ${cityIndex.humidity}`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney`
    );
  }
}
weatherApp();

console.log(cityIndex);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let now = new Date();

let dateDisplay = document.querySelector(".dateDisplay");

let hours = now.getHours();
let minutes = now.getMinutes();

let dayIndex = now.getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let date = days[dayIndex];

let apiKey = "c5f0e59acac64258bb92ed027d20c68f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityIndex}&appid=${apiKey}&units=imperial`;

function showCity(response) {
  navigator.geolocation.showCity(showPosition);
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let currentTemperature = Math.round(response.data.main.temp);
  console.log(currentTemperature);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data.main.temp}°F`;
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("click", showTemperature, showCity);

axios.get(apiUrl).then(showTemperature);
