const WeatherMainInfo = ({ weather }) => {
  return (
    <div>
      <div className="city">
        City: <b>{weather?.location.name}</b>
      </div>
      <div className="country">
        Country: <b>{weather?.location.country}</b>
      </div>
      <div className="grade-one">
        <div className="grade">
          <div>
            <img
              src={weather?.current.condition.icon}
              width="128"
              alt={weather?.current.condition.text}
            />
          </div>
          <div>
            <div className="temp">
              <b>{weather?.current.temp_c}</b>°C
            </div>
          </div>
        </div>
        <div>
          <h2>WEATHER</h2>
          <div className="current">{weather?.current.condition.text}</div>
          <div className="wind">
            Winds Km/h: <b>{weather?.current.wind_kph}</b>
          </div>
          <div className="humidity">
            Humidity: <b>{weather?.current.humidity}%</b>
          </div>
        </div>
      </div>
      <div>
        <div>Local Time: {weather?.location.localtime}</div>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158951.1822577131!2d${weather?.location.lon}082277393256358!3d${weather?.location.lat}198317542185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1678904708621!5m2!1ses!2sbo`}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default WeatherMainInfo;
