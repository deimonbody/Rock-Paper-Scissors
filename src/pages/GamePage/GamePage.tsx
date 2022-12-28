import Game from "@src/components/Game/Game";
import GameBoard from "@src/components/Game/GameBoard";
import GameHeader from "@src/components/Game/GameHeader";
import Wrapper from "@src/components/Wrapper/Wrapper";
import React from "react";

import styles from "./style.module.scss";

const GamePage = () => {
  return (
    <Wrapper>
      <div className={styles.gameWrapper}>
        <GameHeader />
        <GameBoard />
        <Game />
      </div>
    </Wrapper>
  );
};

export default GamePage;
