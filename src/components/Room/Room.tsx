import { LanguageWord } from "@src/common/enum";
import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../shared/Button/Button";
import styles from "./style.module.scss";

interface IProps {
  title: string;
  clickHandler: () => void;
}
const Room: React.FC<IProps> = ({ title, clickHandler }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.room}>
      <p className={styles.room__title}>{title}</p>
      <Button
        text={t(LanguageWord.join)}
        clickHandler={clickHandler}
        className={styles.room__btn}
      />
      <p className={styles.room__status}>Waiting for users:0/2</p>
    </div>
  );
};

export default Room;
