import React, { useEffect, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { NumbersContext } from "../../contexts/numberscontext";
import { AccessContext } from "../../contexts/accesscontext";
import styles from "./access.module.css";
import { LOGIN, MAIN, CREATEROOM } from "../../routes";
import { LOCALHOST } from '../../routes';
import open  from '../../media/public.png';
import close  from '../../media/private.png';

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
  } = useContext(AccessContext);
  
  const history = useHistory();

  const getRooms = async () => {
    const url = LOCALHOST + "/rooms";
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
  },);

  return (
    <div className={styles.__login_content}>
      <h1>Accesss Room</h1>
      <div className={styles.__input_div}>
      
        <input
          className={styles.__input}
          type="text"
          placeholder="Alias"
          onChange={handleChangeAlias}
        />
        <div className={styles.__select}>
        <img className={styles.__rooms_list_img} src={open} alt="open"/>
        <select>
        {rooms &&
            rooms.map((item) => (
              item.access==1 ?  
           <option 
                className={styles.__option1}
                value={item.id}
                name={item.name}
                
                label={item.name}
              />
              :<></>
            ))}
            </select>
        <img className={styles.__rooms_list_img} src={close} alt="open"/>

            <select>
        {rooms &&
            rooms.map((item) => (
              item.access==1 ?  
           <option 
                className={styles.__option1}
                value={item.id}
                name={item.name}
                
                label={item.name}
              />
              :<></>
            ))}
            </select>
        </div>
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
