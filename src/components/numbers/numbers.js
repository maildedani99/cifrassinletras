import React, { useState, useEffect, useContext } from "react";
import styles from "./numbers.module.css";
import { AccessContext } from "../../contexts/accesscontext";
import { NumbersContext } from '../../contexts/numberscontext';

import Signs from '../signs/signs';

const Numbers = (props) => {


  const { array, setArray, objective, product, factor1, factor2, setFactor1, setFactor2, setClickedNumber, clickedNumber, calcLine, setCalcLine, pushOnLine, removeNumber, finalResult, setFinalResult } = useContext(NumbersContext);



  const clickNumber = (e) => {
    removeNumber(e);
    pushOnLine(e);
  }


  return (
    <>
      <div className={styles.__game_left_div}>
        <div className={styles.__div_keys}>
          {array.map((item) => (
            <div className={styles.__numbers_number_div}>
              <a onClick={(e) => clickNumber(item)} >
                {item}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.__div_keys}>
        </div>
      </div>
    </>
  );
};
export default Numbers;
