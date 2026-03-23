const axios = require('axios');

const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the city you want to fetch weather for

const fetchWeatherData = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const weather = response.data;
        console.log(`Current temperature in ${city}: ${weather.main.temp}°C`);
        console.log(`Weather conditions: ${weather.weather[0].description}`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

fetchWeatherData();