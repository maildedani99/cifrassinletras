import React from "react";
import styles from "./signs.module.css";

const Signs = () => {

    const suma = "+";
    const resta = "-";
    const multi = "x";
    const divi = "/";

  return (
    <div className={styles.__signs_div}>
      <div className={styles.__signs_sign_div}>
        <a>{suma}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a>{resta}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a>{multi}</a>
      </div>
      <div className={styles.__signs_sign_div}>
        <a>{divi}</a>
      </div>
    </div>
  );
};
export default Signs;
