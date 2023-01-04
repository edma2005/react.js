import './App.css';
import Logo from "./components/Logo.js"
import NavBar from "./components/NavBar.js"
import FuncButton from './components/FuncButton';
import FuncDiv from './components/FuncDiv';
import ClassButton from './components/ClassButton';

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
    </div>
  );
}

export default App;