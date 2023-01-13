import React from 'react'
import TopBar from '../Components/TopBar'
import { getCars } from '../API/cars'
import { Link } from "react-router-dom";

function HomePage() {
  const cars = getCars()

  return (
    <div>
      <TopBar/>
      <h1>Mano Pagrindis Puslapis</h1>
      <ul>
        {cars.map((car) => (
          <Link key={car.id} to={`/cars/${car.id}`}>
            <li style={{ marginBottom: 8 }}>
              {car.make} {car.model}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;