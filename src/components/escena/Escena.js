import React from "react";
import { Rectangulo, Button } from "../../styled";
import { useState } from "react";

function Escena() {
  //Array con los textos de la historia
  const texts = [
    "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial.",
    "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
    "L'heroi va decidir travessar la porta que el portava a casa.",
    "Mentrestant, altres herois no van tenir tanta sort en la seva elecció...",
  ];

  //Método map que recorre el array y muestra los textos con el estilo
  const elements = texts.map((text) => {
    return <Rectangulo isClick={false}>{text}</Rectangulo>;
  });

  const colorElements = texts.map((text) => {
    return <Rectangulo isClick={true}>{text}</Rectangulo>;
  });

  //hooks?useState para cambiar el estado
  //const [history, setHistory] = useState();

  //funciones que hacen que el texto se coloree
  const previousText = () => {};
  const nextText = () => {};

  return (
    <>
      <Button onClick={previousText}>Anterior</Button>
      <Button onClick={nextText}>Següent</Button>
      <p>{elements}</p>
    </>
  );
}

export default Escena;
