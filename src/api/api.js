import config from 'config';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': config.get('RAPID_API_KEY'),
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const GEO_API_URL = 'http://localhost:8000/search/';
