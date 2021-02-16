import React, { useEffect, useContext, useState } from "react";
import styles from "./gamepanel.module.css";
import Objective from "../../components/objective/objective";
import Numbers from "../../components/numbers/numbers";
import Blackboard from "../../components/blackboard/blackboard";
import { AccessContext } from "../../contexts/accesscontext";
import Signs from "../../components/signs/signs";

const GamePanel = (props) => {
  const { room, getRoom } = useContext(AccessContext);
    const [factor1, setFactor1] = useState("");
  const [factor2, setFactor2] = useState("");
  const [result, setResult] = useState();
  const [sign, setSign] = useState();
 
  const [blackboardKey, setBlackboardKey] = useState(1);
  const suma = "+";
  const resta = "-";
  const multi = "x";
  const divi = "/";
  const equal = "=";
  const [operations, setOperations] = useState({
    line1: [],
    line2: [],
    line3: [],
    line4: [],
    line5: [],
    line6: [],
  });
  

  const numberRemove = (item) => {
    const found = room.array.indexOf(
      (element) => parseInt(element) == parseInt(item)
    );
   
    /* array.splice(found, 1); */
  };

  const calculate =  () => {
    
    switch (sign) {
      case "+":
        setResult(parseInt(factor1) + parseInt(factor2));
        break;
      case "-":
        setResult(parseInt(factor1) - parseInt(factor2));
        break;
      case "x":
        setResult(parseInt(factor1) * parseInt(factor2));
        break;
      case "/":
        setResult(parseInt(factor1) / parseInt(factor2));
        break;
    }
    /* forceUpdate() */
  };

  const numberClick = (event) => {
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
  }
  

  useEffect(() => {
    getRoom()
  }, []);
  return (
    <div  className={styles.__gamepanel_div}>
      <h1>Game Panel </h1>
      <div className={styles.__header_div}>
        <div className={styles.__header_div_keyboard}>
          <Numbers
            factor1={factor1}
            factor2={factor2}
            result={result}
            numberClick={numberClick}
          />
          <Signs
            suma={suma}
            resta={resta}
            divi={divi}
            multi={multi}
            equal={equal}
            equalClick={equalClick}
            signClick={signClick}
          />
        </div>
        <Objective />
      </div>
      <Blackboard
        factor1={factor1}
        factor2={factor2}
        result={result}
        operations={operations}
      />
    </div>
  );
};
export default GamePanel;
