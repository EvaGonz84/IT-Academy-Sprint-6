import React from "react";
import { Rectangulo, Button } from "../../styled";
import { useState } from "react";

const texts = [
  {
    id: 1,
    phrase:
      "El nostre heroi estava surant per l'espai sideral quan a la       llunyania va albirar una nau espacial.",
  },

  {
    id: 2,
    phrase:
      "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
  },

  {
    id: 3,
    phrase: "L'heroi va decidir travessar la porta que el portava a casa.",
  },

  {
    id: 4,
    phrase:
      "Mentrestant, altres herois no van tenir tanta sort en la seva elecció...",
  },
];

function Escena() {
  const [value, setValue] = useState(0);
  const elements = texts.map((text) => {
    return (
      <Rectangulo isClick={text.id === value ? true : false} key={text.id}>
        {text.phrase}
      </Rectangulo>
    );
  });

  const previousText = () => {
    value>1?setValue(value-1):setValue(value);
  };

  const nextText = () => {
    value<4?setValue(value+1):setValue(value);
  };

  return (
    <>
      <Button onClick={previousText}>Anterior</Button>
      <Button onClick={nextText}>Següent</Button>
      <div>{elements}</div>
    </>
  );
}

export default Escena;
