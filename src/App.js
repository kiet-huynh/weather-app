import React from 'react';
import { useWeather } from './hooks/useWeather';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import Loader from './components/Loader';
import Error from './components/Error';
import './App.css';

function App() {
  const { weather, loading, error } = useWeather();

  return (
    <div className="App">
      <header>
        <h1>Local Weather</h1>
      </header>
      
      <main>
        {loading && <Loader />}
        
        {error && <Error message={error} />}
        
        {!loading && !error && weather && (
          <div className="weather-container">
            <WeatherCard weatherData={weather} />
            <WeatherDetails weatherData={weather} />
            <Forecast forecastData={weather.forecast} />
          </div>
        )}
      </main>
      
      <footer>
        <p>Data provided by OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;
