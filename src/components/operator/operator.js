import React from 'react';
import styles from './operator.module.css';

const Operator = (props) => {

    const { factor1 } = props;
    console.log(factor1);




    return(
            <div className={styles.__operator_div} ><p>hola : {factor1}</p></div>
    )
}
export default Operator;