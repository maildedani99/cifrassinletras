import React, { useContext } from "react";
import styles from "./signs.module.css";
import { NumbersContext } from "../../contexts/numberscontext";
const Signs = (props) => {

  const { } = useContext(NumbersContext);
const { suma, resta, multi, divi, equal, equalClick, signClick } = props;
  /* const { signClick } = props; */

  

  
    

  return (
    <div className={styles.__signs_div}>
      <div className={styles.__signs_sign_div}>
        <a onClick={signClick} name={suma}>{suma}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a onClick={signClick} name={resta}>{resta}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a onClick={signClick} name={multi}>{multi}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a onClick={signClick} name={divi}>{divi}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a onClick={equalClick} name={equal}>{equal}</a>
      </div>
    </div>
  );
};
export default Signs;
