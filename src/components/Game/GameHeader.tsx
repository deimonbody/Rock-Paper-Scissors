import { LanguageWord } from "@src/common/enum";
import { useAppSelector } from "@src/store/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

import { Languages } from "../shared";
import styles from "./style.module.scss";

const GameHeader = () => {
  const { user } = useAppSelector((store) => store.userReducer);

  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <div className={styles.header__text}>
        {t(LanguageWord.user)}:{user.name}
      </div>
      <Languages />
    </div>
  );
};

export default GameHeader;
