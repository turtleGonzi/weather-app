import { getWeatherApi, getData } from "./api";

const img = document.querySelector("img");

const button = document.querySelector("button");
const input = document.querySelector("input");

async function setDomData(data) {
  const mesto = document.querySelector(".mesto");
  const temp = document.querySelector(".temp");
  const podminky = document.querySelector(".podminky");
  const vlhkost = document.querySelector(".vlhkost p:nth-child(2)");
  const vitr = document.querySelector(".vitr p:nth-child(2)");
  const vychod = document.querySelector(".vychod p:nth-child(2)");
  const zapad = document.querySelector(".zapad p:nth-child(2)");

  const dataPocasi = data.aktualniPocasi;

  mesto.textContent = data.mesto;
  temp.textContent = dataPocasi.temp + " ˚C";
  podminky.textContent = dataPocasi.conditions;
  vlhkost.textContent = dataPocasi.humidity + "%";
  vitr.textContent = dataPocasi.windspeed + " kph";
  vychod.textContent = dataPocasi.sunrise;
  zapad.textContent = dataPocasi.sunset;

  const { default: obrazek } = await import(`./assets/${dataPocasi.icon}.png`);
  img.src = obrazek;
}

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const response = await getWeatherApi(input.value);
  if (!response?.ok) {
    return false;
  }
  const pocasi = await getData(response);
  setDomData(pocasi);
});

export { setDomData };
