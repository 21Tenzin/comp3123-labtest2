import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherSearch from "./components/WeatherSearch";
import { fetchWeather } from "./api/WeatherApi";
import "./App.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleCitySearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeather(city); 
      setWeatherData(data);
    } catch (error) {
      setError("City not found or an API error occurred. Please try again.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch onSearch={handleCitySearch} />
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </header>
    </div>
  );
};

export default App;
