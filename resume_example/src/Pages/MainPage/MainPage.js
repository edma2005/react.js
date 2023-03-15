import "../MainPage/MainPage.css";

import { useEffect, useState } from "react";

import TopBar from "../../Components/TopBar/TopBar";
import WeatherCard from "../../Components/WeatherCard/WeatherCard";
import myPhoto from "../../Utils/myPhoto.jpg";
import { weatherAPI } from "../../Consts/consts";

const MainPage = () => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    fetch(weatherAPI)
      .then((resp) => resp.json())
      .then((response) => {
        setWeather(response);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(weather);

  return (
    <div className="container">
      <TopBar />
      <div className="profile-intro">
        <div className="picture">
          <img src={myPhoto} alt="pic" />
        </div>
        <div>
          <h2>Tomas Krinickas</h2>
          <p>I'm a freshly made Front End developer from Vilnius, Lithuania</p>
        </div>
      </div>
      <div className="aboutMe">
        <h3>About me</h3>
        <p>
          Hi, my Name is Tomas Krinickas, i'm 24 years old, freshly made Front End developer. I
          finished my studies in Code Academy, where i gained a lot of knowleadge with plain HTML,
          CSS and JavaScript, as well as working with newer and more advanced, CSS type, language
          SCSS. In my study period, i've worked with Node JS, on a surface level and using REACT
          library to full extent. I'm a quick learner, so i can pick up new things fast and get on
          with the work.
        </p>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default MainPage;
