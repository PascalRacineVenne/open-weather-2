import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import { fetchGeo } from './utils/fetchGeo.js';
import { fetchWeather } from './utils/fetchWeather.js';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

// Get lat && lon for a givin city
app.get('/search/:city', async (req, res) => {
  const cityInfos = await fetchGeo(req.params);
  res.json(cityInfos);
});

// Pass weather data to fetch weather API
app.post('/weather', async (req, res) => {
  const weatherInfos = await fetchWeather(req.body);
  res.json(weatherInfos);
});

// Serve static assets in production
// set static folder
app.use(express.static('build'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
