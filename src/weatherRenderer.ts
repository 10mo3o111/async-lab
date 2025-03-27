import { WeatherInfo, WeatherData } from "./weatherInfo";
import { weatherDescriptions } from "./weatherCodes";
import { days } from "./daysOfWeek";
import { getWeatherImage } from "./weatherImageSelector";
import { LIBRARIES } from "./libraries";

const todayTemperature = document.querySelector(".c_weather__temperature");
const weatherDescription = document.querySelector(".c_weather__description");
const daysArea = document.querySelectorAll(".c_forecast__day");
const weatherImage = document.querySelector(
  ".c_weather__image"
) as HTMLImageElement;
const weatherIcon1 = document.querySelector(
  ".c_forecast__weatherIcon1"
) as HTMLImageElement;
const weatherIcon2 = document.querySelector(
  ".c_forecast__weatherIcon2"
) as HTMLImageElement;
const weatherIcon3 = document.querySelector(
  ".c_forecast__weatherIcon3"
) as HTMLImageElement;
const forecastHigh = document.querySelector(".c_forecast__high");
const forecastHigh1 = document.querySelector(".c_forecast__high1");
const forecastHigh2 = document.querySelector(".c_forecast__high2");
const forecastHigh3 = document.querySelector(".c_forecast__high3");
const forecastLow = document.querySelector(".c_forecast__low");
const forecastLow1 = document.querySelector(".c_forecast__low1");
const forecastLow2 = document.querySelector(".c_forecast__low2");
const forecastLow3 = document.querySelector(".c_forecast__low3");

export async function renderWeather() {
  const selectedLocation = document.getElementById(
    "weatherCity"
  ) as HTMLFormElement;
  const selectedId = selectedLocation.value;
  const selectedCity = LIBRARIES.find((library) => {
    return library.id === selectedId;
  });
  const latitude = selectedCity?.latitude;
  const longitude = selectedCity?.longitude;

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&current=weather_code,temperature_2m&timezone=Asia%2FTokyo`
  );
  const weatherData: WeatherData = await response.json();
  const weatherInfo = new WeatherInfo(weatherData);

  // アクセス時の時刻
  const accessTime = new Date();
  // アクセス時の曜日
  const accessDate = accessTime.getDay();

  // 現在の気温を表示
  if (todayTemperature) {
    todayTemperature.textContent =
      String(weatherInfo.temperature_2m) + weatherInfo.temperatureUnit;
  }

  // アクセス時の天気コード・・天気画像を設定
  const { imageUrl, altString } = getWeatherImage(weatherInfo.currentCode);
  weatherImage.src = imageUrl;
  weatherImage.alt = altString;

  // アクセス時の天気コード表示
  if (weatherDescription) {
    const weatherCode = weatherInfo.currentCode;
    weatherDescription.textContent =
      weatherDescriptions[weatherCode] || "不明な天気";
  }

  // 週間予報の画像・温度設定
  function setForecastData(
    matchingDateIndex: number,
    weatherIcon: HTMLImageElement | null,
    forecastHigh: Element,
    forecastLow: Element
  ) {
    // 画像設定
    const { imageUrl: forecastImageUrl, altString: forecastImageAlt } =
      getWeatherImage(matchingDateIndex);
    if (weatherIcon) {
      weatherIcon.src = forecastImageUrl;
      weatherIcon.alt = forecastImageAlt;
    }
    //最高気温・最低気温設定
    if (forecastHigh) {
      forecastHigh.textContent = String(
        weatherInfo.temperatureMax[matchingDateIndex]
      );
    }
    if (forecastLow) {
      forecastLow.textContent = String(
        weatherInfo.temperatureMin[matchingDateIndex]
      );
    }
  }

  // アクセス時の最高気温・最低気温設定
  if (forecastHigh && forecastLow) {
    setForecastData(0, null, forecastHigh, forecastLow);
  }

  // アクセス時1日後の最高気温・最低気温設定／天気画像alt属性設定
  if (weatherIcon1 && forecastHigh1 && forecastLow1) {
    setForecastData(1, weatherIcon1, forecastHigh1, forecastLow1);
  }

  // アクセス時2日後の最高気温・最低気温設定／天気画像alt属性設定
  if (weatherIcon2 && forecastHigh2 && forecastLow2) {
    setForecastData(2, weatherIcon2, forecastHigh2, forecastLow2);
  }

  // アクセス時3日後の最高気温・最低気温設定／天気画像alt属性設定
  if (weatherIcon3 && forecastHigh3 && forecastLow3) {
    setForecastData(3, weatherIcon3, forecastHigh3, forecastLow3);
  }

  // 曜日表示
  let num = accessDate + 1;
  daysArea.forEach((_, index) => {
    daysArea[index].textContent = days[num];
    num++;
  });
}
