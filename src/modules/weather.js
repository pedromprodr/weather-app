// APIKEY - 1ffdc9ad57e02cc6f9d10ae53a341c18

async function getCity(city) {
  const url =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    city +
    "&limit=1&appid=1ffdc9ad57e02cc6f9d10ae53a341c18";
  console.log(city);
  const response = await fetch(url, { mode: "cors" });

  const data = await response.json();

  console.log(data);

  return data[0];
}

async function getWeatherForToday(cityName) {

  const cityData = await getCity(cityName);

  const lat = await cityData.lat;
  const lon = await cityData.lon;

  const url =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=1ffdc9ad57e02cc6f9d10ae53a341c18";
  var data = fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.error(err);
    });

  console.log(data[0]);

  return data[0];
}

export { getWeatherForToday, getCity };
