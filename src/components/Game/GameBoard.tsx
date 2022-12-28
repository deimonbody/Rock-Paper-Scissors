import { LanguageWord } from "@src/common/enum";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./style.module.scss";

const GameBoard = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.scoreBoard}>
      <div className={styles.scoreBoard__title}>{t(LanguageWord.score)}</div>
      <div className={styles.scoreBoard__users}>
        <div className={styles.scoreBoard__userBlock}>
          <p>{t(LanguageWord.user)}:Dima</p>
          <p className={styles.scoreBoard__score}>0</p>
        </div>
        <div className={styles.scoreBoard__userBlock}>
          <p>{t(LanguageWord.user)}:Dima</p>
          <p className={styles.scoreBoard__score}>0</p>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
