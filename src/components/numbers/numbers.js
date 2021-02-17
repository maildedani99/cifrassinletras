import React, { useState, useEffect } from "react";
import styles from "./numbers.module.css";
import Operator from "../operator/operator";
import Number from "../number/number";
import Signs from "../signs/signs";

const Numbers = (props) => {
  const  { array } = props;
  const [factor, setFactor] = useState("");
  const [factor2, setFactor2] = useState("");
  const [numbersArray, setNumbersArray] = useState([]);
  const [line, setLine] = useState("");
  const [count, setCount] =  useState(0);
  const [refresh, setRefresh] = useState(false);
  


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
  const pushNumber = (e) => {
    let y = array.indexOf(e);
    array.splice(y,1)
    console.log(y);
    let x = Math.floor(Math.random() * 11);
    array.push(x);
    setNumbersArray([array]);
    console.log(e)
}
const sumaUno = () => {
  setCount(count+1)
}

useEffect(() => {
  setNumbersArray(array);
})
  return (
        <div className={styles.__numbers_div}>

          {numbersArray.map((item) => (
            <div className={styles.__numbers_number_div}  onClick={(e)=>pushNumber(item)}>
              <Number number={item} />
            </div>
        ))}
        </div>
         
  );
};
export default Numbers;
