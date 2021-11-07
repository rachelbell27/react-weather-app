import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  const [temp, setTemp] = useState(Math.round(props.temp));

  function displayCelcius(event) {
    event.preventDefault();
    setTemp(Math.round(((props.temp - 32) * 5) / 9));
    setUnit("celcius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setTemp(Math.round(props.temp));
  }
  if (unit === "fahrenheit") {
    return (
      <h2>
        {temp}
        <span className="temp">
          <span className="active">°F</span> |{" "}
          <a href="/" onClick={displayCelcius}>
            °C
          </a>
        </span>
      </h2>
    );
  } else {
    return (
      <h2>
        {temp}
        <span className="temp">
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>{" "}
          | <span className="active">°C</span>{" "}
        </span>
      </h2>
    );
  }
}
