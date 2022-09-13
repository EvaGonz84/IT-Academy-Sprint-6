import Escena from "./components/Escena/Escena.js";
import { useState } from "react";
import { Button, Start } from "./styled.js";


function App() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(false);
  };
  return (
    <div className="App">
      {click ? (
        <Start>
      <h2 className="title">Comença la història de l'heroi prement el següent botó</h2><Button onClick={ handleClick }>Start</Button>
        </Start>
      ) : (
        <div>
          <Escena />
        </div>
      )}
    </div>
  );
}

export default App;
