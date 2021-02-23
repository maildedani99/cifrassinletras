import React, { useContext } from "react";
import styles from "./signs.module.css";
import { NumbersContext } from "../../contexts/numberscontext";

const Signs = () => {
  const { setClickedSign, clickedSign,  signsArray, setSignsArray, calcLine, setCalcLine, pushOnLine } = useContext(NumbersContext);
  
const addSing = (sign) => {
  
  setClickedSign([sign]);
  calcLine.push(sign);
  setCalcLine([...calcLine])
  console.log(clickedSign)
}
  const clickSign = (e) => {
    pushOnLine(e)
     }
  return (
    <div className={styles.__signs_div}>
      {signsArray.map((item) => (
        <div onClick={(e)=> clickSign(item)} className={styles.__signs_sign_div}>
          <a >{item}</a>
        </div>
      ))}
    </div>
  );
};
export default Signs;
