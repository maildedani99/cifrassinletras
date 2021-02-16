import React, { useContext, useState, useEffect } from "react";
import styles from "./blackboard.module.css";
import OperatorLine from '../operatorline/operatorline';
import { NumbersContext } from '../../contexts/numberscontext';

const Blackboard = (props) => {
  const { operations, blackboardKey } = props;

   



  useEffect(() => {
      console.log(operations.line1)
   })

  return (
    <div className={styles.__blackboard}>
      
      <div className={styles.__operator_div}>
       {operations.line1.map((item) => (
         <a key={blackboardKey}>
           {item} 
         </a>
       ))}
      </div>
      <div className={styles.__operator_div}>
       {operations.line2.map((item) => (
         <a>
           {item} 
         </a>
       ))}
      </div>
      <div className={styles.__operator_div}>
       {operations.line3.map((item) => (
         <a>
           {item} 
         </a>
       ))}
      </div>
      <div className={styles.__operator_div}>
       {operations.line4.map((item) => (
         <a>
           {item} 
         </a>
       ))}
      </div>
      <input
        type="button"
        value="sumar"
        className={styles.__numbers_reset_button}
        /* onClick={calcular} */
      />
      <input
        type="button"
        value="Reset"
        className={styles.__numbers_reset_button}
        /* onClick={reset} */
      />
    </div>
  );
};
export default Blackboard;
