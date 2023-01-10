import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiates?");
  
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Nieko tokio, viskas bus gerai :)")}>
        Jaučiuosi prastai
      </button>
      <button onClick={() => setMessage("Pasistenk pasijusti dar geriau :)")}>
        Jaučiuosi normaliai
      </button>
      <button onClick={() => setMessage("Viskas puiku!")}>
        Jaučiuosi puikiai
      </button>
    </div>
  );
};

export default MoodChecker;