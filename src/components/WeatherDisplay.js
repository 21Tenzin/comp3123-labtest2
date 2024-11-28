import React from "react";

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <p>Temperature: {Math.round(main.temp - 273.15)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
  );
};

export default WeatherDisplay; // Corrected export
