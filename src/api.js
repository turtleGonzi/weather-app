async function getWeatherApi(city = "Prague") {
  try {
    const load = document.querySelector(".loader");
    load.style.display = "block";
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=KEY&unitGroup=metric`
    );
    load.style.display = "none";
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function getData(response) {
  try {
    const data = await response.json();
    return {
      mesto: data.address,
      aktualniPocasi: data.currentConditions,
    };
  } catch (err) {
    console.log(err);
  }
}

export { getWeatherApi, getData };
