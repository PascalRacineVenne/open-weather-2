import React, { useState } from 'react';
import './main.scss';

import Search from './components/search/search.js';
// import CurrentWeather from './components/current-weather/current-weather.js';
import CurrentWeather2 from './components/current-weather/current-weather-2.js';
import Forecast from './components/forecast/forecast.js';
import BurgerMenu from './components/burger-menu.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = async (searchData) => {
    try {
      const response = await fetch(`http://localhost:8000/weather`, {
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

  return (
    <div className='container'>
      <section>
        <div className='nav'>
          <p className='title'>
            <a href='/#' alt='skysearch'>
              SkySearch
            </a>
          </p>
          <BurgerMenu />
        </div>
        <Search onSearchChange={handleOnSearchChange} />
        {/* <img src='./images/menu.svg' alt='burger' className='menu-btn' /> */}
        {/* {currentWeather && <CurrentWeather data={currentWeather} />} */}
        {currentWeather && <CurrentWeather2 data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </section>
    </div>
  );
}

export default App;
