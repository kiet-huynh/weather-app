import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  const { current } = weatherData;
  
  return (
    <div className="weather-details">
      <div className="details-row">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">{Math.round(current.main.feels_like)}°C</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{current.main.humidity}%</span>
        </div>
      </div>
      
      <div className="details-row">
        <div className="detail-item">
          <span className="detail-label">Wind</span>
          <span className="detail-value">{(current.wind.speed * 3.6).toFixed(1)} km/h</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{current.main.pressure} hPa</span>
        </div>
      </div>
      
      <div className="details-row">
        <div className="detail-item">
          <span className="detail-label">Sunrise</span>
          <span className="detail-value">
            {new Date(current.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Sunset</span>
          <span className="detail-value">
            {new Date(current.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
