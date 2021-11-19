import React, { useState, useEffect } from "react";
import "./App.css";

import WeatherCurrent from "./components/WeatherCurrent";
import WeatherForecast from "./components/WeatherForecast";
import CitySelect from "./components/CitySelect";

const API_KEY = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Slaný");
  const [forecast, setForecast] = useState(null);

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  const fetchWeatherForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const rawList = data.list;
        const dayForecast = rawList.filter((_, i) => i % 8 === 0);
        setForecast(dayForecast);
      });
  };

  useEffect(() => {
    fetchWeather();
    fetchWeatherForecast();
  }, [city]);

  const handleSelect = (city) => {
    setCity(city);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <CitySelect city={city} onSelect={handleSelect} />
        <div className="weather">
          {weather !== null || undefined ? <WeatherCurrent data={weather} city={city} /> : "loading..."}

          <div className="weather__forecast" id="predpoved">
            {forecast !== null || undefined
              ? forecast.map((_, idx) => {
                  return <WeatherForecast data={forecast} idx={idx} key={idx} />;
                })
              : "loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
