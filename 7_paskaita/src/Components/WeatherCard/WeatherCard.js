import React from 'react'
import "./WeatherCard.css"
import { FaSnowflake } from 'react-icons/fa';
import { WiDaySunny } from "react-icons/wi";

function WeatherCard({weather}) {
    const getWeatherIcon = (weathercode) => {
        switch (weathercode) {
            case 71:
                return <FaSnowflake color='white' size={115}/>;
            default:
                return <WiDaySunny color='yellow' size={115}/>;
        }
    }

  return (
    <div className='weather-card'>
        <div className='weather-info'>
        <p className='weather-city'>{weather.timezone}</p>
        <p className='weather-date'>{new Date().toDateString()}</p>
        <p className='weather-temp'>
            {weather.daily.temperature_2m_min[0]}
            {weather.daily_units.temperature_2m_min}
            {" "} - {" "}
            {weather.daily.temperature_2m_max[0]}
            {weather.daily_units.temperature_2m_max}
            </p>
        <p className='weather-wind'>
            {weather.daily.windspeed_10m_max[0]}
            {weather.daily_units.windspeed_10m_max}
        </p>
        </div>
        <div className='weather-icon'>
        {getWeatherIcon(weather.daily.weathercode[0])}
        </div>
    </div>
  )
}

export default WeatherCard