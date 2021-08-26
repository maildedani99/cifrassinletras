import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NumbersContext } from "../../contexts/numberscontext";
import { AccessContext } from "../../contexts/accesscontext";
import styles from "./login.module.css";
import { LOGIN, MAIN, CREATEROOM, ACCESS } from "../../routes";

const Login = () => {
  const {
    rooms,
    getRooms,
    room,
    setRoom,
    alias,
    setAlias,
    roomName,
    setRoomName,
    id,
    setId,
  } = useContext(AccessContext);
  
  const history = useHistory();

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
  const goToAccess = () => {
    history.replace(ACCESS)
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
          placeholder="Username"
          onChange={handleChangeAlias}
        />
        <input
          className={styles.__input}
          type="text"
          placeholder="Password"
          onChange={handleChangeAlias}
        />
           <input
            className={styles.__button}
            type="button"
            value="Login"
            onClick={goToAccess}
          />
      </div>
    </div>
  );
};
export default Login;
