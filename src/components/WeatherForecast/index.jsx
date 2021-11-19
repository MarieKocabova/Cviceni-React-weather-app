import React from "react";
import { date } from "../../utils/functions";

const WeatherForecast = ({ data, idx }) => {
  return (
    <div className="forecast">
      <div className="forecast__day">{date(data[idx].dt)}</div>
      <div className="forecast__icon">
        <img src={`http://openweathermap.org/img/wn/${data[idx].weather[0].icon}@2x.png`} style={{ height: "100%" }} alt="weather icon" />
      </div>
      <div className="forecast__temp">{Math.round(data[idx].main.temp)} °C</div>
    </div>
  );
};

export default WeatherForecast;
