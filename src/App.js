import React, { useState, useEffect } from "react";
import "./App.css";

import WeatherCurrent from "./components/WeatherCurrent";
import CitySelect from "./components/CitySelect";

const API_KEY = process.env.REACT_APP_MY_API_ID;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague");

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    fetchWeather(city);
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
          {weather !== null || undefined ? <WeatherCurrent weather={weather} city={city} /> : "loading.."}

          <div className="weather__forecast" id="predpoved">
            <div className="forecast">
              <div className="forecast__day">Day, date</div>
              <div className="forecast__icon">
                {/* <img
                src={URL FROM OPEN WEATHER}
                style={{ height: "100%" }}
                alt="current weather icon"
              /> */}
              </div>
              <div className="forecast__temp">-- °C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
