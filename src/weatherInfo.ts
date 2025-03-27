export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    weather_code: string;
    temperature_2m: string;
  };
  current: {
    time: string;
    interval: number;
    weather_code: number;
    temperature_2m: number;
  };
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_min: string;
    temperature_2m_max: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_min: number[];
    temperature_2m_max: number[];
  };
};

export class WeatherInfo {
  #weatherDataJSON: WeatherData;

  constructor(weatherDataJSON: WeatherData) {
    this.#weatherDataJSON = weatherDataJSON;
  }

  get cityName() {
    return this.#weatherDataJSON.timezone;
  }

  get temperatureUnit() {
    return this.#weatherDataJSON.current_units.temperature_2m;
  }

  get hourlyTime() {
    return this.#weatherDataJSON.current.time;
  }

  get temperature_2m() {
    return this.#weatherDataJSON.current.temperature_2m;
  }

  get currentCode() {
    return this.#weatherDataJSON.current.weather_code;
  }

  get weeklyTime() {
    return this.#weatherDataJSON.daily.time;
  }

  get weatherCode() {
    return this.#weatherDataJSON.daily.weather_code;
  }

  get temperatureMin() {
    return this.#weatherDataJSON.daily.temperature_2m_min;
  }

  get temperatureMax() {
    return this.#weatherDataJSON.daily.temperature_2m_max;
  }
}
