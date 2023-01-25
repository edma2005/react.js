import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import AddPetPage from "./Pages/AddPetPage/AddPetPage";

import PetsLogPage from "./Pages/PetsLogPage/PetsLogPage";
import { AddNewPetRoute, DonoPageRoute, MainPageRoute } from "./Conts/routes";
import DonoPage from "./Pages/DonoPage/DonoPage";

function App() {
  return (
    <Routes>
      <Route path={MainPageRoute} element={<MainPage />} />
      <Route path={AddNewPetRoute} element={<AddPetPage />} />
      <Route path={`/logs/:name/:id`} element={<PetsLogPage />} />
      <Route path={DonoPageRoute} element={<DonoPage />} />
    </Routes>
  );
}

export default App;
