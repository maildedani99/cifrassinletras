import React, {useEffect, useState, useContext} from 'react';
import styles from './playerslist.module.css';
import { AccessContext } from '../../contexts/accesscontext';
import {LOCALHOST} from '../../routes';


const PlayersList = () => {

    const {users, setUsers} = useContext(AccessContext);


    const getUsers = async () => {
        const url = LOCALHOST + "/users";
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
           setUsers(myJson)
    
          })
          .catch((error) => console.log(error));
      }; 

      useEffect(() =>{
        getUsers();
      },[])

    return (
        <div className={styles.__playerslist_div}>
            <h1>Players List</h1>
            <div className={styles.__div_list}>
            {users && users.map((item) => ( 
                <p>{item.name}</p>
            ))}
            </div>
        </div>
    )
}
export default PlayersList;