import express from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import { fetchGeo } from './utils/fetchGeo.js';
import { fetchWeather } from './utils/fetchWeather.js';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(express.json({ extended: false }));

// from create react app doc for deployement
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Get lat lon for a givin city
app.get('/search/:city', async (req, res) => {
  const cityInfos = await fetchGeo(req.params);
  res.json(cityInfos);
});

// Pass weather data to fetch weather API
app.post('/weather', async (req, res) => {
  const weatherInfos = await fetchWeather(req.body);
  res.json(weatherInfos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
