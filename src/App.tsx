import React, { useState } from "react";

import DisplayLCD from "DisplayLCD";
import Keyboard from "Keyboard";
import "./App.css";

let lastClick = "clear";

function App() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");

  type TypeOfCheckResult = {
    display: any;
    formula: any;
  };
  const handleShow = (checkResult: TypeOfCheckResult) => {
    const { display, formula } = checkResult;
    setDisplay(display);
    setFormula(formula);
  };

  type TypeOfCustomProps = {
    currentClick: any;
    lastClick: any;
    target: any;
  };
  const handleCheck = (props: TypeOfCustomProps): TypeOfCheckResult => {
    let result = {
      display: "0",
      formula: "",
    };
    const { currentClick, lastClick, target } = props;

    if (currentClick === "clear") {
      result.formula = "";
      result.display = "0";
    } else if (currentClick === "number") {
      if (lastClick === "clear" || lastClick === "operation") {
        // start new number
        result.formula = formula + target.textContent;
        result.display = target.textContent;
      } else if (lastClick === "equal") {
        // new number, clear old result
        result.formula = target.textContent;
        result.display = target.textContent;
      } else {
        if (display === "0" && target.id === "zero") {
          result.formula = formula;
          result.display = display;
        } else {
          // continue this number for decimal and number class
          result.formula = formula + target.textContent;
          result.display = display + target.textContent;
        }
      }
    } else if (currentClick === "decimal") {
      if (lastClick === "clear" || lastClick === "operation") {
        // start new number with '0.x'
        result.formula = `${formula} 0.`;
        result.display = "0.";
      } else if (lastClick === "equal") {
        result.formula = `0.`;
        result.display = `0.`;
      } else if (lastClick === "number") {
        // check that number is contain decimal before
        if (!display.includes(".")) {
          result.formula = formula + target.textContent;
          result.display = display + target.textContent;
        } else {
          result.formula = formula;
          result.display = display;
        }
      } else {
        // the lastClick is 'decimal'
        // do nothing
        result.formula = formula;
        result.display = display;
      }
    } else if (currentClick === "operation") {
      if (lastClick === "clear") {
        // only add & subtract can press
        result.formula = "0" + target.textContent;
        result.display = target.textContent;
      } else if (lastClick === "equal") {
        // get the last result, ex 98 +
        // call the result first
        result.formula = display + target.textContent;
        result.display = target.textContent;
      } else if (lastClick === "operation") {
        // ghi de
        result.formula =
          formula.substr(0, formula.length - 1) + target.textContent;
        result.display = target.textContent;
      } else {
        // bat dau 1 so moi
        result.formula = formula + target.textContent;
        result.display = target.textContent;
      }
    } else {
      // when click on 'equal'
      let calculateResult;
      if (lastClick === "equal") {
        result.formula = formula;
        result.display = display;
      } else {
        try {
          calculateResult = eval(formula);
          result.formula = formula + "=" + calculateResult;
          result.display = calculateResult;
        } catch (err) {
          result.formula = formula;
          result.display = "Syntax ERROR";
        }
      }
    }

    return result;
  };

  const handleClick = (e: any) => {
    const { target } = e;
    let currentClick = target.className;
    let checkResult: TypeOfCheckResult = handleCheck({
      currentClick,
      lastClick,
      target,
    });

    handleShow(checkResult);

    // update lastClick variable
    lastClick = currentClick;
  };

  return (
    <div id="calculator">
      <DisplayLCD display={display} formula={formula} />
      <Keyboard onClick={handleClick} />
    </div>
  );
}

export default App;
