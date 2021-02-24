import React, { useEffect, useContext, useState } from "react";
import styles from "./gamepanel.module.css";
import Objective from "../../components/objective/objective";
import Numbers from "../../components/numbers/numbers";
import Blackboard from "../../components/blackboard/blackboard";
import { AccessContext } from "../../contexts/accesscontext";
import {  NumbersContext } from '../../contexts/numberscontext';
import Signs from "../../components/signs/signs";

const GamePanel = () => {
  const { room, getRoom } = useContext(AccessContext);
  const { array, setArray, objective, product, setProduct, factor1, factor2, setFactor1, setFactor2, finalResult, setFinalResult} = useContext(NumbersContext);
  

  const compareResult = () => {
    let array2= [];
    array.map((item) => {
      let x = Math.abs(objective - item)
        array2.push(x)
    })
    let x = Math.min(...array2)
    let y = array2.indexOf(x)
    setFinalResult(array[y])
  }
  useEffect(() => {
    compareResult();
  },[array])
 
 
  return (
    <div  className={styles.__gamepanel_div}>
      <h1>Game Panel </h1>
      <div className={styles.__header_div}>
        <div className={styles.__header_div_keyboard}>
          <Numbers/>
          <Signs/>
        </div>
        <Objective/>
      </div>
      <Blackboard />
    </div>
  );
};
export default GamePanel;
