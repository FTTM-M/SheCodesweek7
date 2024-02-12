function getDegree(response) {
  let temperature = document.querySelector("#temp");
  let fianalResponse = response.data.temperature.current;
  let currentTemp = Math.round(fianalResponse);
  temperature.innerHTML = currentTemp;
}

function callCity(city) {
  let apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
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
