import React from "react";
import styles from "./main.module.css";
import GamePanel from "../gamepanel/gamepanel";
import PlayersList from "../playerslist/playerslist";
import Navbar from "../../components/navbar/navbar";

const Main = () => {
  return (
    <>
      <div className={styles.__main_container}>
        <Navbar />
        <div className={styles.__game_div}>
          <PlayersList />
          <GamePanel />
        </div>
      </div>
    </>
  );
};
export default Main;
