import React from "react";

const CitySelect = ({ city, onSelect }) => {
  const handleSelect = () => {
    console.log(city);
    onSelect(city);
  };

  return (
    <div className="button-group">
      <button className="button" onClick={handleSelect}>
        {city}
      </button>
      <button className="button" onClick={handleSelect}>
        Reykjavik
      </button>
      <button className="button" onClick={handleSelect}>
        Tenerife
      </button>
    </div>
  );
};

export default CitySelect;
