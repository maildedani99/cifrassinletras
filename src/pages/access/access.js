import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NumbersContext } from "../../contexts/numberscontext";
import styles from "./access.module.css";
import { LOGIN, MAIN, CREATEROOM } from "../../routes";
import { LOCALHOST } from '../../routes';

const Access = () => {
  const {
    rooms,
    setRooms,
    room,
    setRoom,
    alias,
    setAlias,
    roomName,
    setRoomName,
    id,
    setId,
  } = useContext(NumbersContext);
  
  const history = useHistory();

  const getRooms = async () => {
    const url = LOCALHOST + "rooms";
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
       setRooms(myJson)

      })
      .catch((error) => console.log(error));
  }; 

  const handleChangeSelect = (event) => {
    setRoomName(event.target.name);
    setId(event.target.value);
    console.log(roomName, id)
  };
  const handleChangeAlias = (event) => {
    setAlias({ ...alias, alias: event.target.value });
  };
  const goToMain = () => {
    localStorage.setItem("alias", alias);
    history.replace(MAIN)
  }
  const goToCreate = () => {
      history.replace(CREATEROOM)
  }

  useEffect(() => {
    getRooms();
  }, []);

  return (
    <div className={styles.__login_content}>
      <h1>Login Page</h1>
      <div className={styles.__input_div}>
        <input
          className={styles.__input}
          type="text"
          placeholder="Alias"
          onChange={handleChangeAlias}
        />
          <input className={styles.__button} type="button" value="Enter Room" onClick={goToMain} />
       
          <input
            className={styles.__button}
            type="button"
            value="Create Room"
            onClick={goToCreate}
          />
      </div>
    </div>
  );
};
export default Access;
