import React, { useState, useEffect, useContext } from "react";
import styles from "./numbers.module.css";
import { AccessContext } from "../../contexts/accesscontext";
import Signs from '../signs/signs';

const Numbers = (props) => { 

  const { room } = useContext(AccessContext);
  
const { numberClick , factor1, factor2, setResult } = props;  

let array;
  let dani = [25,25,21,2,12,1]
  useEffect(() => {
    
    
    console.log(Array.from(dani))
  },[])

  return (
    <>
      <div className={styles.__game_left_div}>
        <div className={styles.__div_keys}>
          
        {[25,23,1].map((item) => (
            <div className={styles.__numbers_number_div}>
              <a name={item} onClick={numberClick} >
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
