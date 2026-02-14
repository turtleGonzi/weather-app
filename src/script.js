import "./style.css";
import "./api.js";
import "./dom.js";

async function run() {
  const { getWeatherApi, getData } = await import("./api.js");
  const { setDomData } = await import("./dom.js");
  const response = await getWeatherApi();
  const pocasi = await getData(response);
  setDomData(pocasi);
}

run();
