import { useState } from "react";
import Startgame from "./assets/Components/Startgame";
import Gameplay from "./assets/Components/Gameplay";


function App() {
  const [isgamestarted,setisgamestarted] = useState(false);
  const togglegameplay = () =>{

    setisgamestarted((prev) => !prev);

  }
  
  return (
    <>
  {

    isgamestarted ?  <Gameplay /> : <Startgame toggle = {togglegameplay}
    />
  }
  
    </>
  );
}

export default App;
