function weather(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let cityValue = cityInput.value;
  let fianal = document.querySelector("#fianal-city");
  fianal.innerHTML = cityValue;
}

let selectForm = document.querySelector("#form");
selectForm.addEventListener("submit", weather);
