import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NumbersContext } from "../../contexts/numberscontext";
import { AccessContext } from "../../contexts/accesscontext";
import { MAIN } from "../../routes";
import { useHistory } from "react-router-dom";


import styles from "./createroom.module.css";

const CreateRoom = () => {
  
  const { getRoomKey, roomKey, setRoomKey, roomName, setRoomName, room, setRoom } = useContext(
    AccessContext
  );
  const history = useHistory();
  const [data, setData] = useState();
  const [access, setAccess] = useState();

  const handleChangeRoom = (event) => {
    setData({ ...data, roomName: event.target.value });
    console.log(data);
  };

  const handleChangeAccess = (event) => {
    setData({ ...data, access: event.target.name });
    console.log(access);
  };
  

  const createRoom = () => {
    const url = "http://localhost:4000/create";
    const body = {
      name: data.roomName,
      roomKey: roomKey,
    };
    const options = {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      mode: "cors",
      body: JSON.stringify(body),
    };
    console.log(data)
    fetch(url, options)
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          console.log(response.status);
          return response.json();
        } else {
          return Promise.reject(response.status);
        }
      })
      .then(function (myJson) {
        setRoom(JSON.parse(myJson));
    })
    .catch((error) => console.log(error));
    history.replace(MAIN);
};
  useEffect(() => {
      getRoomKey()
     
    console.log(roomKey);
  }, []);

  return (
    <div className={styles.__login_content}>
      <h1>Create new Room</h1>
      <div className={styles.__input_div}>
        <p className={styles.__roomkey}>Room ID: {roomKey}</p>
        <input
          className={styles.__input}
          type="text"
          placeholder="Room name"
          onChange={handleChangeRoom}
        />
        <select
          className={styles.__select_input}
          onChange={handleChangeAccess}
        >
          <option value="">Select Access</option>
          <option value="Public" name="public">
            Public
          </option>
          <option value="Private" name="private">
            Private
          </option>
        </select>
        <input
          className={styles.__button}
          type="button"
          value="Create Room"
          onClick={createRoom}
        />
        <Link to={MAIN}>
          <a>Enter to Game Panel</a>
        </Link>
      </div>
    </div>
  );
};
export default CreateRoom;
