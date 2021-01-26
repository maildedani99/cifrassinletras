import React from 'react';
import styles from './gamepanel.module.css';
import Objective from '../../components/objective/objective';
import Numbers from '../../components/numbers/numbers';

const GamePanel = () => {


    return (
        <div className={styles.__gamepanel_div}>
                <h1>Game Panel</h1>
                <Objective />
                <Numbers />
        </div>
    )
}
export default GamePanel;