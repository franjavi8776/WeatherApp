import { useState, useEffect } from "react";
import WeatherMainInfo from "./WeatherMainInfo";
import WeatherForm from "./weatherForm";
import Loading from "./Loading";

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    const key = "655f30e6fec14901bfa144432231503";
    const apiUrl = "http://api.weatherapi.com/v1/current.json?aqi=no";
    try {
      const response = await fetch(`${apiUrl}&key=${key}&q=${city}`);

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
  );
};

export default WeatherApp;
