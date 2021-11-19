import React from "react";

const WeatherForecast = ({ data, idx }) => {
  /* const day = (unixDay) => {
    const hours = new Date(unixSunrise * 1000).getHours();
    const minutes = new Date(unixSunrise * 1000).getMinutes();
    const last2Digits = minutes.toString().padStart(2, "0");
    return `${hours}:${last2Digits}`;
  }; */

  const day = (unixDay) => {
    const timestampDay = new Date(unixDay * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[timestampDay.getDay()];
  };

  return (
    <div className="forecast">
      <div className="forecast__day">{day(data[idx].dt)}, date</div>
      <div className="forecast__icon">
        <img src={`http://openweathermap.org/img/wn/${data[idx].weather[0].icon}@2x.png`} style={{ height: "100%" }} alt="current weather icon" />
      </div>
      <div className="forecast__temp">{Math.round(data[idx].main.temp)} °C</div>
    </div>
  );
};

export default WeatherForecast;
