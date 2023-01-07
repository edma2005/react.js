import Button from "./components/Button";
// import {useState} from "react"

function App() {
  // const name = "Edma";
  // const array = [1, 2];
  // const first = array[0];
  // const second = array[1];
  // const [first, second] = array;
  // const [name, setName] = useState("Edma");

  return (
    <div>
      <Button onClick={() => alert("Labas,kaip sekasi?")}>
        Say Hello
      </Button>
    </div>
  );
}

export default App;