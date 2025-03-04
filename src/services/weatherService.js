import axios from 'axios';

// Using OpenWeatherMap API
const API_KEY = '3960532a5dc071e15fcfee97bd65ffe7'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCoords = async (lat, lon) => {
  try {
    // Get current weather
    const currentWeatherResponse = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    
    // Get 5-day forecast
    const forecastResponse = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    
    return {
      current: currentWeatherResponse.data,
      forecast: forecastResponse.data
    };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};
