import React from 'react';
import wind from '../../images/wind-2.png';
import humid from '../../images/humidity.png';

const CurrentWeather = ({ data }) => {
  console.log(data);
  const { description, icon } = data.weather[0];
  const { feels_like, humidity, temp } = data.main;
  const { speed } = data.wind;

  return (
    <div className='weather'>
      <div className='top'>
        <p className='city'>{data.city}</p>
        <img src={`icons/${icon}.png`} alt='weather' className='weather-icon' />
        <p className='weather-description'>{description}</p>
        <p className='temperature'>{Math.round(temp)}°</p>
        <div className='real-feel'>
          <span className='real-feel-label'>RealFeel</span>
          <span className='real-feel-value'>{Math.round(feels_like)}°</span>
        </div>
      </div>
      <div className='bottom'>
        <div className='details'>
          <div className='details-box'>
            <div className='parameter-row'>
              <img src={wind} alt='wind' className='parameter-label' />
              <span className='parameter-value'>{speed} km/h</span>
            </div>
            <div className='parameter-row'>
              <img src={humid} alt='humidity' className='parameter-label' />
              <span className='parameter-value'>{humidity}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
