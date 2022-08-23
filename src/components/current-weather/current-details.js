import React from 'react';
import { getTime } from '../../helpers/time.js';

const CurrentDetails = ({ data }) => {
  const { humidity, temp_min, temp_max } = data.main;
  const { speed } = data.wind;
  const { sunrise, sunset } = data.sys;

  const rise = getTime(sunrise);
  const drop = getTime(sunset);
  return (
    <div className='current-details'>
      <div className='single-detail'>
        <p className='value'>{Math.round(temp_max)}°</p>
        <small className='label'>High</small>
      </div>
      <div className='single-detail'>
        <p className='value'>{speed} km/h</p>
        <small className='label'>Wind</small>
      </div>
      <div className='single-detail'>
        <p className='value'>{rise}</p>
        <small className='label'>Sunrise</small>
      </div>
      <div className='single-detail'>
        <p className='value'>{Math.round(temp_min)}°</p>
        <small className='label'>Low</small>
      </div>
      <div className='single-detail'>
        <p className='value'>{humidity}%</p>
        <small className='label'>Rain</small>
      </div>
      <div className='single-detail'>
        <p className='value'>{drop}</p>
        <small className='label'>Sunset</small>
      </div>
    </div>
  );
};

export default CurrentDetails;
