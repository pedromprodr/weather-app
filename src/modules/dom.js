import { getWeatherForToday } from "./weather.js";


function citySearch() {
    const city = document.createElement('div');
    const contentContainer = document.getElementById("content-container");
    city.id = "city";
    city.textContent = "Lisbon";
    contentContainer.appendChild(city);
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

    for (let i = 0; i < 5; i++) {
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