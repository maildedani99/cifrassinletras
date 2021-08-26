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
  const { array, setArray, objective, setObjective,  product, setProduct, factor1, factor2, setFactor1, setFactor2, finalResult, setFinalResult} = useContext(NumbersContext);
  

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

  const getNumbers = () => {
    
    let x;
    for (let i = 0; i < 6; i++) 
    { 
      x=Math.floor(Math.random() * (20 - 1))
      if (x!=0 && array.includes(x)==false)
      {
      array.push(x)
      }
      else i--; 
    }
    setObjective(Math.floor(Math.random() * (500 - 100)+100))
  
  };

useEffect(() => {
    getNumbers();
},[])
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
