import React, { useState, useEffect } from "react";
import styles from "./numbers.module.css";
import Operator from "../operator/operator";
import Signs from "../signs/signs";

const Numbers = (props) => {
  const number1 = 34;
  const number2 = 1;
  const number3 = 45;
  const number4 = 9;
  const number5 = 21;
  const numberArray = [number1, number2, number3, number4, number5];
  const [factor, setFactor] = useState("");
  const [factor2, setFactor2] = useState("");

  const [line, setLine] = useState("");

  const numberClick = (event) => {
    factor ? setFactor2(event.target.name) : setFactor(event.target.name);
  };
  const createLine = (factor) => {
    setLine(line + factor);
  };

  const reset = () => {
      setFactor("");
      setFactor2("");
  };

  return (
    <>
      <div className={styles.__numbers_div}>
        {numberArray.map((item) => (
          <div className={styles.__numbers_number_div}>
            <a factor1={factor} name={item} onClick={numberClick}>
              {item}
            </a>
          </div>
        ))}
      </div>
      <Signs />
      <div className={styles.__operator_div}>
        <p>
          {factor}+{factor2} ={" "}
        </p>
      </div>
      <input
        type="button"
        value="Reset"
        className={styles.__numbers_reset_button}
        onClick={reset}
      />
    </>
  );
};
export default Numbers;
