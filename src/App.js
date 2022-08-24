import "./App.css";
import Escena from "./components/escena/Escena.js";
import { Rectangulo } from "./styled";

function App() {
  return (
    <div className="App">
      <Rectangulo>
        <Escena text="El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial." />{" "}
      </Rectangulo>
      <Rectangulo>
        <Escena text="Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes." />
      </Rectangulo>
      <Rectangulo>
        <Escena text="L'heroi va decidir travessar la porta que el portava a casa." />
      </Rectangulo>
      <Rectangulo>
        <Escena text="Mentrestant, altres herois no van tenir tanta sort en la seva elecció..." />
      </Rectangulo>
    </div>
  );
}

export default App;
