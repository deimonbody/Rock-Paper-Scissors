import { LanguagesEnum } from "@src/common/enum";
import { useUserActions } from "@src/store/actions";
import React from "react";
import { useTranslation } from "react-i18next";

import en from "../../../images/en.png";
import spa from "../../../images/spa.png";
import uk from "../../../images/uk.png";
import styles from "./style.module.scss";

const Languages = () => {
  const { changeLanguage } = useUserActions();
  const { i18n } = useTranslation();

  const changeLanguageHanlder = (code: LanguagesEnum) => {
    changeLanguage(code);
    i18n.changeLanguage(code);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.imgWrapper}
        onClick={() => changeLanguageHanlder(LanguagesEnum.ENGLISH)}
      >
        <img className={styles.img} src={en} alt="british flag" />
      </div>
      <div
        className={styles.imgWrapper}
        onClick={() => changeLanguageHanlder(LanguagesEnum.SPANISH)}
      >
        <img className={styles.img} src={spa} alt="spanish flag" />
      </div>
      <div
        className={styles.imgWrapper}
        onClick={() => changeLanguageHanlder(LanguagesEnum.UKRAINE)}
      >
        <img className={styles.img} src={uk} alt="ukraine flag" />
      </div>
    </div>
  );
};

export default Languages;
