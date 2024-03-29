function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `${day} ${hours}:${minutes}`;
}
function getDegree(response) {
  let temperature = document.querySelector("#temp");
  let finalResponse = response.data.temperature.current;
  let currentTemp = Math.round(finalResponse);
  let description = document.querySelector("#position");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let currentTime = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconUrl = document.querySelector("#icon");

  wind.innerHTML = response.data.wind.speed;
  humidity.innerHTML = response.data.temperature.humidity;
  description.innerHTML = response.data.condition.description;
  temperature.innerHTML = currentTemp;
  currentTime.innerHTML = formatDate(date);
  iconUrl.innerHTML = `<img src="${response.data.condition.icon_url}"  class="weather-app-icon" />`;
}

function callCity(city) {
  let apiKey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(getDegree);
}

function weather(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let cityValue = cityInput.value;
  let fianal = document.querySelector("#fianal-city");

  fianal.innerHTML = cityValue;
  callCity(cityValue);
}

let selectForm = document.querySelector("#form");

selectForm.addEventListener("submit", weather);
callCity("paris");
