import './App.css';
import Logo from "./components/Logo.js"
import NavBar from "./components/NavBar.js"
import FuncButton from './components/FuncButton';
import FuncDiv from './components/FuncDiv';
import ClassButton from './components/ClassButton';
import ClassDiv from './components/ClassDiv';
import Button from './components/Button';
import Hero from './components/Hero';

function App() {
  return (
    <div className="container">
      <div>
        <p>
          My name is Edma!
        </p>
      </div>
      <Logo />
      <NavBar />
      <FuncButton title="Spausk mane" color="red"/>
      <FuncButton title="Nespausk mane"/>
      <FuncDiv title="Kazkas" subtitle="KazkasSub" buttonText="text of button"/>
      <FuncDiv title="Kazkas" subtitle="KazkasSub" buttonText="text of button"/>
      <ClassButton title="react button"/>
      <ClassDiv title="class div" subtitle="class" buttonText="classdiv text"/>
      <Button>Spausk cia dawaj</Button>
      <Hero title="Info Hero" subtitle="Info subtitle" color="blue"/>
    </div>
  );
}

export default App;