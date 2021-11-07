import React, { useState } from "react";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import FormattedDate from "./FormattedDate";
export default function WeatherApp() {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({ ready: false });
  let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=d2e2c79fc9c89249abd1e2c823668949`;

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      location: response.data.name,
    });
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready === true && weatherData.description != null) {
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
              <img src={weatherData.icon} alt={weatherData.description} />
            </h1>
            <WeatherTemperature temp={weatherData.temperature} />

            <div className="row">
              <ul className="col-6">
                <li>
                  Last updated: <FormattedDate date={weatherData.date} />
                  <span className="list-info"> </span>
                </li>
                <li>
                  Sky:
                  <span className="list-info"> {weatherData.description}</span>
                </li>
              </ul>
              <ul className="col-6">
                <li>
                  Humidity:
                  <span className="list-info"> {weatherData.humidity}</span>%
                </li>
                <li>
                  Wind speed:
                  <span className="list-info"> {weatherData.wind}</span>
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
    axios.get(url).then(handleResponse);
    return <div>Loading...</div>;
  }
}
