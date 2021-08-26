import React, { createContext, useEffect, useState } from "react";

const AccessContext = createContext();

const { Provider, Consumer } = AccessContext;

const AccessProvider = ( { children }) => {

    const [roomKey, setRoomKey] = useState()
    const [rooms, setRooms] = useState([])
    const [roomName, setRoomName] = useState()
    const [room, setRoom] = useState({})
    const [alias, setAlias] = useState({})
    const [id, setId] = useState()
    const [users, setUsers] = useState([])

    const getRoomKey = () => {
        let caracteres = "BCDFGHJKMNPQRTVWXYZ12346789";
        let contraseña = "";
        let i;
        for (i=0; i<4; i++) contraseña +=caracteres.charAt(Math.floor(Math.random()*caracteres.length)); 
        setRoomKey(contraseña);
        console.log(contraseña)
    }
    const getRooms = async () => {
        const url = "http://localhost:4000/rooms";
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
          setRooms(myJson);
          console.log(rooms);
        })
        .catch((error) => console.log(error));
      };

      const getRoom = async () => {
        const url = `http://localhost:4000/rooms/3`;
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
          setRoom(myJson);
          console.log(room);
        })
        .catch((error) => console.log(error));
      };



    return (
        <Provider
        value= { { getRoomKey, roomKey, roomName, setRoomName, setRoomKey, room, setRoom, alias, setAlias, rooms, getRooms, getRoom, id, setId, users, setUsers } }>
            { children }
        </Provider>
    )
}
export { AccessProvider, Consumer as AccessConsumer, AccessContext };
