import fetch from 'node-fetch';
import config from 'config';

export const fetchWeather = async (searchData) => {
  const [lat, lon] = searchData.value.split(' ');
  const openWeatherKey = config.get('OPEN_WEATHER_KEY');
  try {
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`
    );

    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`
    );

    const result = Promise.all([currentWeatherFetch, forecastFetch]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        return [
          { city: searchData.label, ...weatherResponse },
          { city: searchData.label, ...forecastResponse },
        ];
      }
    );
    return result;
  } catch (error) {
    console.log(error.message);
  }
};
