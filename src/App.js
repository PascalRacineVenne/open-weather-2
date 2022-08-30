import React, { useState, useEffect } from 'react';
import './main.scss';

import Search from './components/search/search.js';
import CurrentWeather from './components/current-weather/current-weather.js';
import Forecast from './components/forecast/forecast.js';
import Navbar from './components/navbar.js';
import CurrentDetails from './components/current-weather/current-details.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    try {
      const response = await fetch(`/weather`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchData),
      });
      const data = await response.json();
      setCurrentWeather(data[0]);
      setForecast(data[1]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleOnSearchChange({
      value: '35.689722222 139.692222222',
      label: 'Tokyo, JP',
    });
  }, []);

  return (
    <div className='container'>
      <section>
        <Navbar />
        <Search onSearchChange={handleOnSearchChange} />
        <div className='current'>
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {currentWeather && <CurrentDetails data={currentWeather} />}
        </div>
        {forecast && <Forecast data={forecast} />}
      </section>
    </div>
  );
}

export default App;
