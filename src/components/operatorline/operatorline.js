import React from 'react';
import styles from './operatorline.module.css';

const OperatorLine = (props) => {

    const { factor, factor2, sign, product } = props;

    return(
            <div className={styles.__operator_div}>
               <p>{factor} {sign} {factor2} = </p>
                {
               Number.isInteger(product) || product==0 ?
               <p>{product}</p>
                :
                <p>Numero no entero!!</p>
               }
            </div>
    )
}
export default OperatorLine;