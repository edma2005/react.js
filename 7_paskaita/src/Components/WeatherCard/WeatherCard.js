import React from 'react'
import "./WeatherCard.css"
import { FaSnowflake } from 'react-icons/fa';
import { ImCancelCircle } from "react-icons/im";
import { WiNightPartlyCloudy } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiDayHail } from "react-icons/wi";
import { WiNightRainWind } from "react-icons/wi";
import { WiNightSnow } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiSprinkle } from "react-icons/wi";
import { WiNightThunderstorm } from "react-icons/wi";

function WeatherCard({weather}) {
    const getWeatherIcon = (weathercode) => {
        switch (weathercode) {
            case 71 || 73 || 75:
                return <FaSnowflake color='white' size={115}/>;
            case 1 || 2 || 3:
                return <WiNightPartlyCloudy color='white' size={115}/>;
            case 45 || 48:
                return <WiDayFog color='white' size={115}/>;
            case 51 || 53 || 55 || 56 || 57:
                return <WiDayHail color='white' size={115}/>;
            case 61 || 63 || 65 || 66 || 67:
                return <WiNightRainWind color='white' size={115}/>;
            case 71 || 73 || 75 || 77:
                return <WiNightSnow color='white' size={115}/>;
            case 80 || 81 || 82:
                return <WiRain color='white' size={115}/>;
            case 85 || 86:
                return <WiSprinkle color='white' size={115}/>;
            case 95 || 96 || 99:
                return <WiNightThunderstorm color='white' size={115}/>;
                                                                                                            
            default:
                return <ImCancelCircle color='red' size={115}/>;

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