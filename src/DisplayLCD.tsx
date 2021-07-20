import React from "react";

type DisplayLCDType = {
  display: string;
  formula: string;
};

const DisplayLCD = (props: DisplayLCDType) => {
  const { display, formula } = props;
  return (
    <div id="lcd">
      <div id="formula">{formula}</div>
      <div id="display">{display}</div>
    </div>
  );
};

export default DisplayLCD;
