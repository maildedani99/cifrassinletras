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
  const { array, setArray, objective, product, setProduct, factor1, factor2, setFactor1, setFactor2 } = useContext(NumbersContext);
  

  
 /*  const numberClick = (event) => {
    let click = parseInt(event.target.name)
    if (factor1 == 0) {
      setFactor1(click);
      operations.line1.push(click);
      numberRemove(factor1);
      console.log(factor2);
    } else {
      if (sign != 0) {
        setFactor2(click);
        operations.line1.push(click);
        operations.line1.push("=");
        console.log(operations.line1);
        calculate();
      } else return;
    }
  };
  const signClick = (event) => {
    if (factor1 != 0 && factor2 == 0) {
      setSign(event.target.name);
      operations.line1.push(event.target.name);
      console.log(sign);
    } else {
      setSign("");
      return;
    }
  };
  const equalClick = (event) => {
      operations.line1.push(event.target.name )
      room.array.push(event.target.name)
      console.log("has clicado equal")
  } */
 
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
