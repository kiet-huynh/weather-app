import React from 'react';

const Forecast = ({ forecastData }) => {
  // Get one forecast per day (at noon)
  const dailyForecasts = forecastData.list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 5);
  
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {dailyForecasts.map((forecast, index) => {
          const date = new Date(forecast.dt * 1000);
          const day = date.toLocaleDateString('en-US', { weekday: 'short' });
          const icon = forecast.weather[0].icon;
          const temp = Math.round(forecast.main.temp);
          
          return (
            <div key={index} className="forecast-item">
              <div className="forecast-day">{day}</div>
              <img 
                src={`http://openweathermap.org/img/wn/${icon}.png`} 
                alt={forecast.weather[0].description} 
              />
              <div className="forecast-temp">{temp}°C</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
