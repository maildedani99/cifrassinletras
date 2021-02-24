import React, { useContext, useState, useEffect } from "react";
import styles from "./blackboard.module.css";
import { NumbersContext } from "../../contexts/numberscontext";

const Blackboard = () => {
  const {
    clickedNumber,
    clickedSign,
    calcLine,
    setCalcLine,
    array,
    setArray,
    product,
    setProduct,
    pushOnLine,
    pushArray,
    removeNumber,
    setFinalResult,
    finalResult
  } = useContext(NumbersContext);
  const [numberLine, setNumberLine] = useState(1);
  const [line1, setLine1] = useState([]);
  const [line2, setLine2] = useState([]);
  const [line3, setLine3] = useState([]);
  const [line4, setLine4] = useState([]);
  const [line5, setLine5] = useState([]);

  const reset = () => {
    setArray([45, 2, 15, 21, 32, 6]);
    setCalcLine([]);
    setLine1([]);
    setLine2([]);
    setLine3([]);
    setLine4([]);
    setLine5([]);
    setNumberLine(1);
    setFinalResult()
  };
  const calculate = () => {
    let a = calcLine[0];
    let b = calcLine[1];
    let c = calcLine[2];
    let d;
    console.log(a + b + c);
    switch (b) {
      case "+":
        d = a + c;
        break;
      case "-":
        d = a - c;
        break;
      case "x":
        d = a * c;
        break;
      case "/":
        d = a / c;
        break;
    }
    if (Number.isInteger(d) == false) {
      d = "return is not integer";
    }
    console.log(d);
    return d;
  };
  const getResult = () => {
    if (calcLine.length != 3) {
      return;
    }
    if (Number.isInteger(calcLine[0]) && Number.isInteger(calcLine[2])) {
      if (Number.isInteger(calcLine[1])) {
        return;
      } else {
        pushOnLine("=");
        let a = calculate();
        if (!Number.isInteger(a)) {
          pushOnLine("Result is not integer");
          setTimeout(() => reset(), 2000);
        } else {
          pushOnLine(a);
          pushArray(a);
          console.log(a);
          addLines(numberLine);
        }
      }
    }
  };
  const addLines = (numberLine) => {
    switch (numberLine) {
      case 1:
        setLine1([...calcLine]);
        break;
      case 2:
        setLine2([...calcLine]);
        break;
      case 3:
        setLine3([...calcLine]);
        break;
      case 4:
        setLine4([...calcLine]);
        break;
      case 5:
        setLine5([...calcLine]);
        break;
    }
    setCalcLine([]);
    setNumberLine(numberLine + 1);
  };
  useEffect(() => {}, []);

  return (
    <div className={styles.__blackboard}>
      <div className={styles.__operator_div}>
        {line1.map((item) => (
          <a>{item} </a>
        ))}
        
      </div>
      <div className={styles.__operator_div}>
        {line2.map((item) => (
          <a>{item} </a>
        ))}
      </div>
      <div className={styles.__operator_div}>
        {line3.map((item) => (
          <a>{item} </a>
        ))}
      </div>
      <div className={styles.__operator_div}>
        {line4.map((item) => (
          <a>{item} </a>
        ))}
      </div>
      <div className={styles.__operator_div}>
        {line5.map((item) => (
          <a>{item} </a>
        ))}
      </div>

      <div className={styles.__operator_div}>
        {calcLine.map((item) => (
          <a>{item} </a>

        ))}
        {calcLine.length == 3 ? (
          <input
            type="button"
            value="="
            className={styles.__numbers_equal_button}
            onClick={getResult}
          />
        ) : (
          <></>
        )}
      </div>
      <div></div>
      <div>
        <input
          type="button"
          value="Reset"
          className={styles.__numbers_reset_button}
          onClick={reset}
        />
      </div>
    </div>
  );
};
export default Blackboard;
