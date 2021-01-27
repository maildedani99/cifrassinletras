import React, { useEffect } from 'react';
import styles from './gamepanel.module.css';
import Objective from '../../components/objective/objective';
import Numbers from '../../components/numbers/numbers';
import Signs from '../../components/signs/signs';
import Operator from '../../components/operator/operator';

const GamePanel = (props) => {

    const { factor1 } = props;

    return (
        <div className={styles.__gamepanel_div}>
                <h1>Game Panel</h1>
                <Objective />
                <Numbers />
                
        </div>
    )
}
export default GamePanel;