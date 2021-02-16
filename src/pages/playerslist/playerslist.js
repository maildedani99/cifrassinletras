import React from 'react';
import styles from './playerslist.module.css';

const PlayersList = () => {


    return (
        <div className={styles.__playerslist_div}>
            <h1>Players List</h1>
            <div className={styles.__div_list}>
                <p>paco</p>
                <p>Javier</p>
                <p>Spock</p>
                <p>Dani</p>
                <p>Gerard_56</p>
            </div>
        </div>
    )
}
export default PlayersList;