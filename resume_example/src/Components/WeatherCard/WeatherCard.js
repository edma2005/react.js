import '../WeatherCard/WeatherCard.css';
import { FaSnowflake, FaSun } from 'react-icons/fa';

const lightBlue = "rgba(173, 216, 230, 0.2)";
const lightYellow = "rgba(255, 255, 0, 0.2)";
const iconSize = 112;

const WeatherCard = ({ weather }) => {
    const getWeatherIcon = (weathercode) => {
      switch (weathercode) {
        case 71:
          return {
            icon: <FaSnowflake color="#93D5F9" size={iconSize} />,
            backgroundColor: lightBlue,
          };
        default:
          return {
            icon: <FaSun color="#FDB813" size={iconSize} />,
            backgroundColor: lightYellow,
          };
      }
    };
  
    const weathercode = weather.daily.weathercode[0];
    const { icon, backgroundColor } = getWeatherIcon(weathercode);
  return (
    
    <div className="weather-card" style={{ backgroundColor }}>
    <div className="weather-info">
      <p className="weather-city">{weather.timezone}</p>
      <p className="weather-date">{new Date().toDateString()}</p>
      <p className="weather-temperature">
        {weather.daily.temperature_2m_min[0]}
        {weather.daily_units.temperature_2m_min} -{" "}
        {weather.daily.temperature_2m_max[0]}
        {weather.daily_units.temperature_2m_max}
      </p>
      <p className="weather-windspeed">
        {weather.daily.windspeed_10m_max[0]}
        {weather.daily_units.windspeed_10m_max}
      </p>
    </div>
    <div className="weather-icon">{icon}</div>
  </div>
  )
}

export default WeatherCard
