// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");

// Event Listener Function on keypress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});

// Get Weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let minMaxTemp = document.getElementById("min-max");
  minMaxTemp.innerHTML = `${Math.floor(
    weather.main.temp_min
  )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);
  body1 = document.getElementById("body1");

  if (weatherType.textContent == "Clear") {
    console.log(weatherType.textContent);
    body1.style.backgroundImage = "url('images/moon-g284c0560d_1920.jpg')";
  } else if (weatherType.textContent == "Clouds") {
    body1.style.backgroundImage = "url('images/cloud.jpg')";
    console.log(weatherType.textContent);
  } else if (weatherType.textContent == "Haze") {
    body1.style.backgroundImage = "url('images/cloud.jpg')";
    console.log(weatherType.textContent);
  } else if (weatherType.textContent == "Rain") {
    body1.style.backgroundImage = "url('images/rain.jpg')";
    console.log(weatherType.textContent);
  } else if (weatherType.textContent == "Snow") {
    body1.style.backgroundImage = "url('images/snow.jpg')";
    console.log(weatherType.textContent);
  } else if (weatherType.textContent == "Thunderstorm") {
    console.log(weatherType.textContent);
    body1.style.backgroundImage = "url('images/thunderstorm.jpg')";
  }
}

// Date manage
function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];
  const d = new Date();
  let time = d.getHours();
  console.log(time);
  return `${date} ${month} (${day}), ${year}`;
}
