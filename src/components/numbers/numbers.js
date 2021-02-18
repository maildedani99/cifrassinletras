import React, { useState, useEffect, useContext } from "react";
import styles from "./numbers.module.css";
import { AccessContext } from "../../contexts/accesscontext";
import Signs from '../signs/signs';

const Numbers = (props) => { 

  const { room } = useContext(AccessContext);
  
const { numberClick , factor1, factor2, setResult, array } = props;  
const [numbersArray, setNumbersArray] = useState([]);
const pushNumber = (e) => {
  let y = array.indexOf(e);
  array.splice(y,1)
  console.log(y);
  let x = Math.floor(Math.random() * 11);
  array.push(x);
  setNumbersArray([array]);
  console.log(e)
}


useEffect(() => {
setNumbersArray(array);
})

  useEffect(() => {
  },[])

  return (
    <>
      <div className={styles.__game_left_div}>
        <div className={styles.__div_keys}>
          
        {numbersArray.map((item) => (
            <div className={styles.__numbers_number_div}>
              <a name={item} onClick={(e)=> numberClick(item)} >
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
