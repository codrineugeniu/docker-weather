import React from 'react';

const CityCard = (props) => {
  const {
    icon,
    date,
    conditions,
    high,
    low,
  } = props
  
  return (
    <div className="icon-demo">
      <h1>{date.weekday}</h1>
      <div>
        <img src={`https://icons.wxug.com/i/c/j/${icon}.gif`} />  
      </div>
      <br />
      <h1 className="temperature">{low.celsius} / {high.celsius}°C</h1>
      <label className="description">{conditions}</label>
      <hr />
      <h1 className="cityname">Iasi, Romania</h1>
    </div>
  );
};

export default CityCard;