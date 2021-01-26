import React from 'react';
import styles from './numbers.module.css';

const Numbers = () => {




    return (
            <div className={styles.__numbers_div}>
                <div className={styles.__numbers_number_div}><a>51</a></div>
                <div className={styles.__numbers_number_div}><a>4</a></div>
                <div className={styles.__numbers_number_div}><a>12</a></div>
                <div className={styles.__numbers_number_div}><a>21</a></div>
                <div className={styles.__numbers_number_div}><a>3</a></div>
            </div>
    )
}
export default Numbers;