import { useEffect, useState } from 'react';
import React from 'react'
import TopBar from '../Components/TopBar'
import { getCars } from '../API/cars'
import { Link } from "react-router-dom";
import WeatherCard from '../Components/WeatherCard/WeatherCard';

function HomePage() {
  const cars = getCars()

  const [weather, setWeather] = useState(undefined)

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=54.69&longitude=25.28&timezone=Europe/Vilnius&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max"
    )
    .then((resp) => resp.json())
    .then(response => {
      setWeather(response)
    })
    .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <TopBar/>
      <h1>Mano Pagrindis Puslapis</h1>
      <div style={{
       display: 'flex',
       justifyContent: "space-between", 
       alignItems: "center", 
       padding: "30px"}}>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            <li style={{ marginBottom: 8 }}>
              {car.make} {car.model}
            </li>
          </Link>
        ))}
      </ul>
        {weather && <WeatherCard weather={weather}/>}
      </div>
    </div>
  )
}

export default HomePage;