import { LanguageWord } from "@src/common/enum";
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./style.module.scss";

interface IProps {
  error: Error;
}

const CustomErrorBoundary: React.FC<IProps> = ({ error }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.errorWrapper}>
      <p className={styles.errorMessage}>
        {t(LanguageWord.errorText1)} :( <br />
        {t(LanguageWord.errorText2)}
      </p>
    </div>
  );
};

export default CustomErrorBoundary;
