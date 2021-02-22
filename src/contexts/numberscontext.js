import React, { createContext, useEffect, useState } from "react";

const NumbersContext = createContext();

let { Provider, Consumer } = NumbersContext;

const NumbersProvider = ({ children }) => {
  
  const [array, setArray ] = useState([45,2,15,21,32,6]);
  const [objective, setObjective] = useState(521);
  const [factor1, setFactor1] = useState();
  const [factor2, setFactor2] = useState();
  const [ clickedNumber, setClickedNumber ] = useState();
  const [clikedSign, setClickedSign] = useState();
  const [product, setProduct] = useState();
  const [calcLine, setCalcLine] = useState([]);
  /* const suma = "+";
  const resta = "-";
  const multi = "x";
  const divi = "/";
  const equal = "="; */
  const [signsArray, setSignsArray] = useState(["+", "-", "x", "/"]);
  
  const pushOnLine =(number)=>{
    calcLine.push(number);
    setCalcLine([...calcLine]); 
  }
  const pushArray = (number) => {
    array.push(number);
      setArray([...array]);
  }
  const handleCalcLine = (factor, sign) => {
    factor==0 || sign!=0 ? console.log("error") : <></>

  }
  const removeNumber = (number) => {
    let y = array.indexOf(number);
    array.splice(y,1);
    setArray([...array]);
  }
  /* const getNumbers = async () => {
    const url = "http://localhost:4000/numbers";
    const options = {
      method: "GET",
      mode: "cors",
      headers: new Headers(),
    };
    await  fetch (url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then (function (myJson) {
        setArray(myJson.array);
        setObjective(myJson.object);
        console.log(array + objective);

      })
      .catch((error) => console.log(error));
  }; */
  
 
  /* const sumar = () => {
    let x = (parseInt(factor1)+parseInt(factor2))
    console.log(x)
  } */
   /* const reset = () => {
    setFactor1("");
    setFactor2("");
    setSign("");
    setProduct("");
  }; */ 
  return (
    <Provider
      value={{ array, setArray, objective, product, setProduct, factor1, factor2, setFactor1, setFactor2, clickedNumber, setClickedNumber, clikedSign, setClickedSign, signsArray, setSignsArray, calcLine, setCalcLine, pushOnLine, handleCalcLine, pushArray, removeNumber }}
    >
      {children}
    </Provider>
  );
};
export { NumbersProvider, Consumer as NumbersConsumer, NumbersContext };
