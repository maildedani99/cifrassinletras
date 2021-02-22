import React, { useEffect, useState, useContext } from "react";
import styles from "./objective.module.css";
import { NumbersContext } from "../../contexts/numberscontext";

const Objective = (props) => {

  
  const { objective } = useContext(NumbersContext);

  return (
    <div>
      <div className={styles.__objective_div}>
        <a className={styles.__objective_number}>{objective}</a>
      </div>
    </div>
  );
};
export default Objective;
