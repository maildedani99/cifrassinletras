import React, { createContext, useEffect, useState } from "react";

const NumbersContext = createContext();

let { Provider, Consumer } = NumbersContext;

const NumbersProvider = ({ children }) => {
  
  const [array, setArray ] = useState([])
  const [objective, setObjective] = useState()
  
  
  const getNumbers = async () => {
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
  };
  
  useEffect(() => {
     
   
  },[])
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
      value={{ array, objective }}
    >
      {children}
    </Provider>
  );
};
export { NumbersProvider, Consumer as NumbersConsumer, NumbersContext };
