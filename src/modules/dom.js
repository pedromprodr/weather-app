import { getWeatherForToday, getCity } from "./weather.js";

const spinner = document.querySelector("#spinner");
const overlay = document.querySelector("#overlay");

async function changeCity() {
  let city = document.getElementById("search-field");
  overlay.style.display = "block";
  spinner.style.display = "block"; // show the spinner

  let citydata = await getCity(city.value);
  try {
    let cityName = await citydata.name;
    let countryName = await citydata.country;
    document.getElementById("city-text").textContent =
      cityName + ", " + countryName;

    let textLength = document.getElementById("city-text").textContent.length;
    let desiredWidth = 0.5;
    let fontSize = (desiredWidth * 100) / textLength;
    document.getElementById("city-text").style.fontSize = fontSize + "vw";

    await refreshTemperatures(cityName);

    overlay.style.display = "none";
    spinner.style.display = "none";
  } catch (err) {
    console.error(err);
    overlay.style.display = "none";
    spinner.style.display = "none";
  }
}

async function refreshTemperatures(cityName) {
  let data = await getWeatherForToday(cityName);
  console.log(data);
  console.log(data.list);
  let todayData = data.list[0];

  document.getElementById("today-current").innerHTML =
    parseInt(todayData.main.temp) + "ºC";
  document.getElementById("today-maxt").innerHTML =
    parseInt(todayData.main.temp_max) + "ºC";
  document.getElementById("today-mint").innerHTML =
    parseInt(todayData.main.temp_min) + "ºC";
  let image = fetch(
    "http://openweathermap.org/img/wn/" + todayData.weather[0].icon + "@2x.png"
  ).then(function (response) {
    document.getElementById("today-image").setAttribute("src", response.url);
  });
  let maxTemp = -100;
  let minTemp = 100;
  let icon = null;
  for (let i = 1; i <= 40; i++) {
    if (i < 40) {
      console.log(data.list[i]);
      let dayData = data.list[i];

      if (maxTemp < parseInt(dayData.main.temp_max)) {
        maxTemp = parseInt(dayData.main.temp_max);
        icon = dayData.weather[0].icon;
      }

      if (minTemp > parseInt(dayData.main.temp_min)) {
        minTemp = parseInt(dayData.main.temp_min);
      }
    }
    if (i % 10 == 0) {
      let pos = i / 10 - 1;
      console.log(maxTemp);
      console.log(minTemp);
      console.log(pos);
      document.getElementById("day" + pos + "-maxt").innerHTML =
        parseInt(maxTemp) + "ºC";
      document.getElementById("day" + pos + "-mint").innerHTML =
        parseInt(minTemp) + "ºC";
      let image = fetch(
        "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      ).then(function (response) {
        document
          .getElementById("day" + pos + "-image")
          .setAttribute("src", response.url);
      });

      maxTemp = -100;
      minTemp = 100;
      icon = null;
    }
  }
}

function citySearch() {
  const cityContainer = document.createElement("div");
  const contentContainer = document.getElementById("content-container");
  cityContainer.id = "city-container";

  const cityText = document.createElement("div");
  cityText.id = "city-text";
  cityText.textContent = "Lisbon, PT";

  const citySearchField = document.createElement("input");
  citySearchField.setAttribute("type", "text");
  citySearchField.setAttribute("id", "search-field");
  citySearchField.setAttribute("placeholder", "Search...");

  const citySearchB = document.createElement("button");
  citySearchB.setAttribute("id", "search-button");
  citySearchB.setAttribute("type", "search-button");
  citySearchB.innerHTML =
    "<span class='material-symbols-outlined'> search </span>";
  citySearchB.addEventListener("click", () => {
    changeCity();
    document.getElementById("search-field").value = "";
  });

  citySearchField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });
  cityContainer.appendChild(cityText);
  cityContainer.appendChild(citySearchField);
  cityContainer.appendChild(citySearchB);

  contentContainer.appendChild(cityContainer);
}

function weatherCards() {
  const cardContainer = document.createElement("div");
  cardContainer.id = "card-container";

  const todayCard = document.createElement("div");
  todayCard.id = "today-card";

  const date = new Date();
  let p = document.createElement("p");
  p.id = "today-text";
  p.textContent = date.getDate() + "/" + date.getMonth() + 1;
  let infoCont = document.createElement("div");
  infoCont.id = "today-info-container";

  const todayImg = document.createElement("img");
  todayImg.id = "today-image";

  let todayCurr = document.createElement("p");
  todayCurr.id = "today-current";
  //REMOVER DEPOIS - APENAS PARA TESTE DE UI
  todayCurr.textContent = "27'C";

  let todayMinMax = document.createElement("div");
  todayMinMax.id = "today-minmax";

  let todayMaxT = document.createElement("p");
  todayMaxT.id = "today-maxt";
  //REMOVER DEPOIS - APENAS PARA TESTE DE UI
  todayMaxT.textContent = "36'C";

  let todayMinT = document.createElement("p");
  todayMinT.id = "today-mint";
  //REMOVER DEPOIS - APENAS PARA TESTE DE UI
  todayMinT.textContent = "21'C";

  todayMinMax.appendChild(todayMaxT);
  todayMinMax.appendChild(todayMinT);

  infoCont.appendChild(p);
  infoCont.appendChild(todayCurr);
  infoCont.appendChild(todayMinMax);

  todayCard.appendChild(infoCont);
  todayCard.appendChild(todayImg);

  cardContainer.appendChild(todayCard);

  for (let i = 0; i < 4; i++) {
    const element = document.createElement("div");
    element.id = "day" + i + "-card";
    element.classList.add("day-card");
    p = document.createElement("p");
    p.id = "day" + i + "-text";
    p.classList.add("day-text");
    p.textContent = date.getDate() + i + 1 + "/" + date.getMonth() + 1;

    let dayinfoCont = document.createElement("div");
    dayinfoCont.id = "day" + i + "info-container";
    dayinfoCont.classList.add("day-info-container");

    let dayMaxT = document.createElement("p");
    dayMaxT.id = "day" + i + "-maxt";
    //REMOVER DEPOIS - APENAS PARA TESTE DE UI
    dayMaxT.textContent = "36'C";
    dayMaxT.classList.add("day-maxt");

    let dayMinT = document.createElement("p");
    dayMinT.id = "day" + i + "-mint";
    //REMOVER DEPOIS - APENAS PARA TESTE DE UI
    dayMinT.textContent = "36'C";
    dayMinT.classList.add("day-mint");

    dayinfoCont.appendChild(dayMaxT);
    dayinfoCont.appendChild(dayMinT);

    const imgday = document.createElement("img");
    imgday.id = "day" + i + "-image";

    element.appendChild(p);
    element.appendChild(imgday);
    element.appendChild(dayinfoCont);

    cardContainer.appendChild(element);
  }

  document.getElementById("content-container").appendChild(cardContainer);
}

export { weatherCards, citySearch };
