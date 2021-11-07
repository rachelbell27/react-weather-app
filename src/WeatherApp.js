import React, { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
export default function WeatherApp() {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({
    display: false,
    location: "",
    temp: null,
    sky: "",
    humidity: null,
    speed: null,
  });
  let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=d2e2c79fc9c89249abd1e2c823668949`;

  function handleCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function handleResponse(response) {
    setWeatherData({
      display: true,
      location: response.data.name,
      temp: response.data.main.temp,
      sky: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
    });
    console.log(response);
    console.log(weatherData.temp);
    console.log(weatherData);
    console.log(response.data.main.temp);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }

  if (city != null) {
    return (
      <div>
        <div className="container">
          <div className="form-wrapper">
            <form autoComplete="off" className="mb-3" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    required
                    onChange={handleCity}
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="wrapper">
            <h1>
              <span>{weatherData.location}</span>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="weather icon"
              />
            </h1>
            <WeatherTemperature temp={weatherData.temp} />

            <div className="row">
              <ul className="col-6">
                <li>
                  Last updated:
                  <span className="list-info"> </span>
                </li>
                <li>
                  Sky:
                  <span className="list-info"> {weatherData.sky}</span>
                </li>
              </ul>
              <ul className="col-6">
                <li>
                  Humidity:
                  <span className="list-info"> {weatherData.humidity}</span>%
                </li>
                <li>
                  Wind speed:
                  <span className="list-info"> {weatherData.speed}</span>
                  mph
                </li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/rachelbell27/react-weather-app"
            rel="noreferrer"
          >
            This app is open source on GitHub.
          </a>
        </footer>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
