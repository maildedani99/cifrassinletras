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
    removeNumber
  } = useContext(NumbersContext);

    const reset = () => {
    setArray([45,2,15,21,32,6]);
    setCalcLine([])
  }
  const calculate =  () => {
    let a = calcLine[0];
    let b = calcLine[1];
    let c = calcLine[2];
    let d;
    console.log(a + b + c)
    switch (b) {
      case "+": d=(a+c);
        break;
      case "-": d=(a-c);
        break;
      case "x": d=(a*c);
        break;
      case "/": d=(a/c);
        break;
    }
    console.log(d)
    return d;
  };
  const getResult = () => {
    console.log(calcLine.length)
    if (calcLine.length != 3) {
      console.log("calcline no es 2")
      return};
    if (Number.isInteger(calcLine[0]) && Number.isInteger(calcLine[2])) {
      if (Number.isInteger(calcLine[1])) {
        return;
      }else {
        pushOnLine("=");
        let a = calculate();
        pushOnLine(a);
        pushArray(a)
        console.log(a);
      }
    } 
  }
  useEffect(() => {
  },[]);

  return (
    <div className={styles.__blackboard}>
      <div className={styles.__operator_div}>
        {calcLine.map((item) => (
          <a>{item} </a>
        ))}
      </div>
      <input
        type="button"
        value="Reset"
        className={styles.__numbers_reset_button}
        onClick={reset}
      />
      <input
        type="button"
        value="="
        className={styles.__numbers_reset_button}
        onClick={getResult}
      />
    </div>
  );
};
export default Blackboard;
