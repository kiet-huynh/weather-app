import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { current } = weatherData;
  const temp = Math.round(current.main.temp);
  const description = current.weather[0].description;
  const icon = current.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{current.name}, {current.sys.country}</h2>
        <p className="date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      
      <div className="weather-body">
        <img 
          src={iconUrl} 
          alt={description} 
          className="weather-icon" 
        />
        <div className="temperature">{temp}°C</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
