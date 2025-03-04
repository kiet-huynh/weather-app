import { useState, useEffect } from 'react';
import { fetchWeatherByCoords } from '../services/weatherService';

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        setLoading(true);
        // Get user's geolocation
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const weatherData = await fetchWeatherByCoords(latitude, longitude);
            setWeather(weatherData);
            setLoading(false);
          },
          (err) => {
            setError(`Geolocation error: ${err.message}`);
            setLoading(false);
          }
        );
      } catch (err) {
        setError(`Failed to fetch weather data: ${err.message}`);
        setLoading(false);
      }
    };

    getWeatherData();
  }, []);

  return { weather, loading, error };
};
