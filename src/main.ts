import "normalize.css";
import "./style.css";
import { fetchDataFromJson } from "./seatStatus";
import { renderWeather } from "./weatherRenderer";

const js = document.getElementById("js");
const security = document.getElementById("security");
const aiux = document.getElementById("aiux");
const weatherCity = document.getElementById("weatherCity");

js?.addEventListener("click", fetchDataFromJson);
security?.addEventListener("click", fetchDataFromJson);
aiux?.addEventListener("click", fetchDataFromJson);

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await renderWeather();
  } catch (error) {
    console.error("天気情報の取得に失敗しました", error);
  }
});

weatherCity?.addEventListener("change", renderWeather);
