import {Routes, Route} from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import MainPage from './Pages/MainPage/MainPage';
import ContactMe from './Pages/ContactMe/ContactMe';
import MyProjects from './Pages/MyProjects/MyProjects';
import { mainPageRoute, aboutMeRoute, myProjectsRoute, contactMeRoute } from './Consts/consts.js';

function App() {
  return (
    <Routes>
      <Route path={mainPageRoute} element={<MainPage/>}/>
      <Route path={aboutMeRoute} element={<AboutMe/>}/>
      <Route path={myProjectsRoute} element={<MyProjects/>}/>
      <Route path={contactMeRoute} element={<ContactMe/>}/>
    </Routes>
  );
}

export default App;
