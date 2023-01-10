import MoodChecker from "./Components/MoodChecker";
import MenuList from "./Components/MenuList";

function App() {
  return (
    <div>
      <MoodChecker/>
      <MenuList customerType="single"/>
      <MenuList customerType="couple"/>
      <MenuList customerType="family"/>
    </div>
  );
}

export default App;
