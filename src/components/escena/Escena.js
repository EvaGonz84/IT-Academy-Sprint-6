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
const elements = texts.map((text) => {
  return <Rectangulo isClick={false}>{text.phrase}</Rectangulo>;
});

function Escena() {
  //useState para cambiar el estado
  const [value, setValue] = useState(0);
  //funciones para iluminar el botón comprando el número de la escena en la que estás con el número vinculado a cada uno de los botones.
  const previousText = () => {
    setValue(value - 1);
    console.log(value);
  };

  const nextText = () => {
    setValue(value + 1);
    let elements2 = texts.map((text)=>{
      if (text.id === value) {
        return <Rectangulo isClick={true}>{text.phrase}</Rectangulo>;
      }
     });
    console.log(value)
    return elements2;
  };

  return (
    <>
      <Button onClick={previousText}>Anterior</Button>
      <Button onClick={nextText}>Següent</Button>

      <p>{elements}</p>
    </>
  );
}

export default Escena;
