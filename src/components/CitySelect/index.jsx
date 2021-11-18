import React from "react";
import cities from "../../utils/cities";

const CitySelect = ({ city, onSelect }) => {
  const changeCity = (e) => {
    onSelect(e.target.value);
  };

  return (
    <div className="select-wrapper">
      <select className="select" name="cityselect" id="cityselect" value={city} onChange={changeCity}>
        {cities.map((cityName, id) => (
          <option value={cityName} key={id}>
            {cityName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;
