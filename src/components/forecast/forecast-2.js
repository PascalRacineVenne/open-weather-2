import React from 'react';
import humid from '../../images/humidity.png';

// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const Forecast2 = ({ data }) => {
  const dayOfTheWeek = new Date().getDay();
  const currentDay = new Date().getDate();
  const forecastDays = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfTheWeek)
  );

  const multipleDays = data.list;

  return (
    <>
      <h3 className='daily'>Daily</h3>

      <div className='forecast'>
        {multipleDays.splice(0, 7).map((day, index) => (
          <div className='daily-item' key={index}>
            <p className='day'>{forecastDays[index]}</p>
            <p className='day'>{currentDay}</p>
            <img
              src={`icons/${day.weather[0].icon}.png`}
              alt='weather'
              className='icon-small'
            />
            {/* <label htmlFor='' className='description'>
              {day.weather[0].description}
            </label> */}
            <div className='scale-temp'>
              <p className='min-max'>{Math.round(day.main.temp_min)}°</p>
              <div className='scale'></div>
              <p className='min-max'>{Math.round(day.main.temp_max)}°</p>
            </div>
            <div className='humid'>
              <img src={humid} alt='humidity' />
              <p>{day.main.humidity}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* <Accordion allowZeroExpanded>
        {multipleDays.splice(0, 7).map((day, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='daily-item'>
                  <label htmlFor='' className='day'>
                    {forecastDays[index]}
                  </label>
                  <label htmlFor='' className='day'>
                    {currentDay}
                  </label>
                  <img
                    src={`icons/${day.weather[0].icon}.png`}
                    alt='weather'
                    className='icon-small'
                  />
                  <label htmlFor='' className='description'>
                    {day.weather[0].description}
                  </label>
                  <label htmlFor='' className='min-max'>
                    {Math.round(day.main.temp_min)}°C /
                    {Math.round(day.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className='daily-details-grid'>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Pressure</label>
                  <label htmlFor=''>{day.main.pressure}kPa</label>
                </div>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Humidity</label>
                  <label htmlFor=''>{day.main.humidity}%</label>
                </div>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Clouds</label>
                  <label htmlFor=''>{day.clouds.all}%</label>
                </div>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Wind speed:</label>
                  <label htmlFor=''>{day.wind.speed} m/s</label>
                </div>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Sea level:</label>
                  <label htmlFor=''>{day.main.sea_level}m</label>
                </div>
                <div className='daily-details-grid-items'>
                  <label htmlFor=''>Feels like</label>
                  <label htmlFor=''>{Math.round(day.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
    </>
  );
};

export default Forecast2;
