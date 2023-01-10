import Button from "./components/Button";
import Product from "./components/Product";
import { useState } from "react";
import CustomButton from "./components/CustomButton/CustomButton";
import Greeting from "./components/Greeting";
// import {useState} from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <Product/>
      <div>
      <CustomButton variant="text">text</CustomButton>
      <CustomButton variant="contained">contained</CustomButton>
      <CustomButton variant="outlined">outlined</CustomButton>
      </div>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
      <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      ) : (
      <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      )}
      {/* <Greeting isLoggedIn={isLoggedIn} />
      <button onClick={() => setIsLoggedIn(true)}>Log in</button>
      <button onClick={() => setIsLoggedIn(false)}>Log out</button> */}
    </div>
  );
}

export default App;