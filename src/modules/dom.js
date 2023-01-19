import { getWeatherForToday, getCity } from "./weather.js";


async function changeCity(){
    let city = document.getElementById("search-field");
    let citydata = await getCity(city.value);
    let cityName = await citydata.name;
    let countryName = await citydata.country;
    
    document.getElementById("city-text").textContent = cityName+", "+countryName;

    let textLength = document.getElementById("city-text").textContent.length;
    let desiredWidth = 0.5;
    let fontSize = (desiredWidth * 100) / textLength;
    document.getElementById("city-text").style.fontSize = fontSize + "vw";
}

function citySearch() {
    const cityContainer = document.createElement('div');
    const contentContainer = document.getElementById("content-container");
    cityContainer.id = "city-container"

    const cityText = document.createElement('div');
    cityText.id = "city-text";
    cityText.textContent = "Lisbon, PT";

    const citySearchField = document.createElement("input");
    citySearchField.setAttribute("type", "text");
    citySearchField.setAttribute("id", "search-field");
    citySearchField.setAttribute("placeholder", "Search...");



    const citySearchB = document.createElement("button");
    citySearchB.setAttribute("id", "search-button");
    citySearchB.setAttribute("type", "search-button");
    citySearchB.innerHTML = "<span class='material-symbols-outlined'> search </span>";
    citySearchB.addEventListener("click",()=>{
        changeCity();
        document.getElementById("search-field").textContent = "";
    })

    citySearchField.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("search-button").click();
        }
      });
    cityContainer.appendChild(cityText);
    cityContainer.appendChild(citySearchField);
    cityContainer.appendChild(citySearchB);

    contentContainer.appendChild(cityContainer);
}

function weatherCards() {

    const cardContainer = document.createElement('div')
    cardContainer.id = "card-container"

    const todayCard = document.createElement('div')
    todayCard.id = "today-card"


    const date = new Date();
    console.log(date);
    let p = document.createElement('p');
    p.id = "today-text";
    p.textContent = date.getDate() + "/" + date.getMonth() + 1;

    todayCard.appendChild(p)

    cardContainer.appendChild(todayCard);

    for (let i = 0; i < 4; i++) {
        const element = document.createElement('div')
        element.id = "day" + i + "-card"
        element.classList.add("day-card")
        p = document.createElement('p');
        p.id = "day" + i + "-text";
        p.classList.add("day-text");
        console.log(date.getDate);
        p.textContent = date.getDate() + i + 1 + "/" + date.getMonth() + 1;

        element.appendChild(p);

        cardContainer.appendChild(element)
    }

    document.getElementById("content-container").appendChild(cardContainer)
}
export { weatherCards, citySearch }