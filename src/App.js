import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="form-wrapper">
          <form autoComplete="off" className="mb-3" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city..."
                  className="form-control"
                  id="search-input"
                  required
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                  id="search-submit"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="wrapper">
          <h1>
            <span id="city-element">New York</span>,
            <span id="country-element"> US</span>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather icon"
              id="weather-icon"
            />
          </h1>
          <h2>
            <span id="temperature-element">62</span>
            <span className="temp active" id="fahrenheit-temperature">
              °F{" "}
            </span>
          </h2>

          <div className="row">
            <ul className="col-6">
              <li>
                Last updated:
                <span className="list-info" id="date-time-element">
                  {" "}
                  Sun, 9:53am
                </span>
              </li>
              <li>
                Sky:
                <span className="list-info" id="sky-element">
                  {" "}
                  Overcast Clouds
                </span>
              </li>
            </ul>
            <ul className="col-6">
              <li>
                Humidity:
                <span className="list-info" id="humidity-element">
                  {" "}
                  87
                </span>
                %
              </li>
              <li>
                Wind speed:
                <span className="list-info" id="wind-element">
                  {" "}
                  1.01
                </span>
                mph
              </li>
            </ul>
          </div>
        </div>

        <div className="forecast" id="forecast"></div>
      </div>
    </div>
  );
}
