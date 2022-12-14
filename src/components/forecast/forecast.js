import React from 'react';
import humid from '../../images/humidity.png';

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const Forecast = ({ data }) => {
  const dayOfTheWeek = new Date().getDay();
  let currentDay = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfTheWeek)
  );

  const multipleDays = data.list;
  const { name, country } = data.city;

  return (
    <div className='forecast-container'>
      <h3 className='daily'>
        {name}, {country} Daily
      </h3>

      <div className='forecast'>
        {multipleDays.splice(0, 7).map((day, index) => (
          <div className='daily-item' key={index}>
            <p className='day'>{forecastDays[index]}</p>
            <p className='day'>{(currentDay += 1)}</p>
            <img
              src={`icons/${day.weather[0].icon}.png`}
              alt='weather'
              className='icon-small'
            />
            <div className='scale-temp'>
              <p className='min-max'>{Math.round(day.main.temp_max)}°</p>
              <div className='scale'></div>
              <p className='min-max'>{Math.round(day.main.temp_min)}°</p>
            </div>
            <div className='humid'>
              <img src={humid} alt='humidity' />
              <p>{day.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
