import { getWeatherForToday } from "./modules/weather.js";
import { citySearch, weatherCards } from "./modules/dom.js";
import css from "./style.css";

const contentContainer = document.createElement('div');
contentContainer.id = "content-container"
document.body.appendChild(contentContainer);


weatherCards();
citySearch();
getWeatherForToday("Lisbon");
