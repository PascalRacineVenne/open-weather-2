import React from 'react';

const CurrentWeather = ({ data }) => {
  const city = data.city;
  const { description, icon } = data.weather[0];
  const { feels_like, humidity, pressure, temp } = data.main;
  const { speed } = data.wind;

  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>{city}</p>
          <p className='weather-description'>{description}</p>
        </div>
        <img src={`icons/${icon}.png`} alt='weather' className='weather-icon' />
      </div>
      <div className='bottom'>
        <p className='temperature'>{Math.round(temp)}°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label'>Details</span>
          </div>
          <div className='details-box'>
            <div className='parameter-row'>
              <span className='parameter-label'>Feels like</span>
              <span className='parameter-value'>
                {Math.round(feels_like)}°C
              </span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Wind</span>
              <span className='parameter-value'>{speed} m/s</span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Humidity</span>
              <span className='parameter-value'>{humidity}%</span>
            </div>
            <div className='parameter-row'>
              <span className='parameter-label'>Pressure</span>
              <span className='parameter-value'>{pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
