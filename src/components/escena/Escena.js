import React from "react";
import { Rectangulo, Button } from "../../styled";
import { useState } from "react";
import Texts from "./Texts.js";

function Escena() {
  const [value, setValue] = useState(0);
  const elements = Texts.map((text) => {
    return (
      <Rectangulo isClick={text.id === value ? true : false} key={text.id}>
        {text.phrase}
      </Rectangulo>
    );
  });

  const previousText = () => {
    value > 0 ? setValue(value - 1) : setValue(value);
  };

  const nextText = () => {
    value < 3 ? setValue(value + 1) : setValue(value);
  };

  const backgroundImage = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 650,
    minWidth: 450,
    backgroundImage: `url(${Texts[value].img})`,
  };

  return (
    <div style={backgroundImage}>
      <Button onClick={previousText}>Anterior</Button>
      <Button onClick={nextText}>Següent</Button>
      <div>{elements}</div>
    </div>
  );
}

export default Escena;
