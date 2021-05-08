import React, { useEffect, useState, useContext } from "react";
import styles from "./objective.module.css";
import { NumbersContext } from "../../contexts/numberscontext";

const Objective = (props) => {

  
  const { objective, finalResult } = useContext(NumbersContext);

  return (
    <div>
      <div className={styles.__objective_div}>
      <p className={styles.objective_title}>Objective</p>
        <a className={styles.__objective_number}>{objective}</a>
        
      </div>
      <div className={styles.__nearest_result_div}>
        <p className={styles.objective_title}>Nearest result</p>
        <a className={styles.nearest_result_number}>{finalResult}</a>
      </div>
    </div>
  );
};
export default Objective;
