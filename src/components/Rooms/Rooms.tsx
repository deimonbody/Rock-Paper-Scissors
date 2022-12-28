import React from "react";

import Room from "../Room/Room";
import styles from "./style.module.scss";

const Rooms = () => {
  const joinHanlder = () => {
    console.log("Joinde to room");
  };

  return (
    <div className={styles.rooms}>
      <Room title="First Room" clickHandler={joinHanlder} />
      <Room title="Second Room" clickHandler={joinHanlder} />
      <Room title="Third Room" clickHandler={joinHanlder} />
    </div>
  );
};

export default Rooms;
