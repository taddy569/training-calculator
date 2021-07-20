import React from "react";

import Key from "Key";
import { keyData } from "helper/constant";

type TypeOfProps = {
  onClick: any;
};

const Keyboard = (props: TypeOfProps) => {
  const { onClick } = props;
  const result = keyData.map((el) => (
    <Key
      key={el.id}
      id={el.id}
      className={el.type}
      value={el.value}
      onClick={onClick}
    />
  ));
  return <div id="keyboard">{result}</div>;
};

export default Keyboard;
