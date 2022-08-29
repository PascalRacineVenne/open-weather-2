import fetch from 'node-fetch';
import config from 'config';
// import { geoApiOptions } from '../src/Api/api.js';

export const fetchGeo = async (query) => {
  const geoApiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': config.get('RAPID_API_KEY'),
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };
  try {
    const response = await fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${query.city}`,
      geoApiOptions
    );
    const responseJSON = await response.json();
    return {
      options: responseJSON.data.map((city) => {
        return {
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        };
      }),
    };
  } catch (error) {
    console.error(error.message);
  }
};
