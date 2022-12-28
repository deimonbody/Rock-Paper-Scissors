import { LanguageWord } from "@src/common/enum";
import React from "react";
import { useTranslation } from "react-i18next";

import Paper from "../../images/paper.svg";
import Rock from "../../images/rock.svg";
import Scissors from "../../images/scissors.svg";
import ElementBlock from "./ElementBlock";
import styles from "./style.module.scss";

const Game = () => {
  const { t } = useTranslation();

  const blocks = [
    {
      src: Paper,
      title: t(LanguageWord.paper),
      gameBlockStyle: styles.gameBlock_first,
      gameWrapperStyle: styles.gameBlockWrapper_first,
    },
    {
      src: Rock,
      title: t(LanguageWord.rock),
      gameBlockStyle: styles.gameBlock_second,
      gameWrapperStyle: styles.gameBlockWrapper_second,
    },
    {
      src: Scissors,
      title: t(LanguageWord.scissors),
      gameBlockStyle: styles.gameBlock_third,
      gameWrapperStyle: styles.gameBlockWrapper_third,
    },
  ];

  return (
    <div className={styles.game}>
      {blocks.map((block) => {
        return (
          <ElementBlock
            key={block.title}
            title={block.title}
            src={block.src}
            gameBlockStyle={block.gameBlockStyle}
            gameWrapperStyle={block.gameWrapperStyle}
          />
        );
      })}
    </div>
  );
};

export default Game;
