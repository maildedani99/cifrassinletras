import React, { useEffect, useContext, useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../media/logo.png";
import { useHistory } from 'react-router-dom'
import { LOGIN } from '../../routes';
import { AccessContext } from "../../contexts/accesscontext";

const Navbar = () => {
  const { roomName, alias, id, room } = useContext(AccessContext);
  const history = useHistory();

  const goToLogin = () => {
    history.replace(LOGIN)
  }
  const newGame = () => {
    const url = "http://localhost/rooms/update/3";
    const body = {
      array: "[21,56,5,2,1,21]",
      objective: "561",
    };
    const options = {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      mode: "cors",
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          console.log(response.status);
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {});
  return (
    <div className={styles.__navbar}>
      <div className={styles.__navbar_item}>
        <img src={logo} alt="Logo"  width="200px"/>
      </div>
      {/* <div className={styles.__navbar_item}>
        <p>Alias: {alias.alias}</p>
      </div>
      <div className={styles.__navbar_item}>
        <p>Room: {room.name}</p>
      </div>
      <div className={styles.__navbar_item}>
        <p>Key: {room.key}</p>
      </div> */}
      <div className={styles.__navbar_item}>
          <p>
        <input className={styles.__navbar_button_new} type="button" value="New Game" onClick={newGame} />
          </p>
      </div>
      <div className={styles.__navbar_item}>
          <p>
        <input className={styles.__navbar_button_exit} type="button" value="Exit Room" onClick={goToLogin} />
          </p>
      </div>
    </div>
  );
};
export default Navbar;
