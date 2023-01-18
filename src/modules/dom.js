import { getWeatherForToday } from "./weather.js";

const contentContainer = document.getElementById("content-container");


function weatherCards() {
    const cardContainer = document.createElement('div')
    cardContainer.id = "card-container"

    const todayCard = document.createElement('div')
    todayCard.id = "today-card"

    cardContainer.appendChild(todayCard);

    for (let i = 0; i < 5; i++) {
        const element = document.createElement('div')
        element.id = "day" + i + "-card"
        cardContainer.appendChild(element)
    }

    document.getElementById("content-container").appendChild(cardContainer)
}
export { weatherCards }