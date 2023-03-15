import {Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage';
import ContactMe from './Pages/ContactMe/ContactMe';
import MyProjects from './Pages/MyProjects/MyProjects';
import { mainPageRoute, myProjectsRoute, contactMeRoute} from './Consts/consts.js';
import ProjectPage from './Pages/ProjectPage/ProjectPage';

function App() {
  return (
    <Routes>
      <Route path={mainPageRoute} element={<MainPage/>}/>
      <Route path={myProjectsRoute} element={<MyProjects/>}/>
      <Route path={contactMeRoute} element={<ContactMe/>}/>
      <Route path={myProjectsRoute + `/:title`} element={<ProjectPage/>}/>
    </Routes>
  );
}

export default App;
