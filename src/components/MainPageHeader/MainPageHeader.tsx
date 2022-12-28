import { LanguageWord } from "@src/common/enum";
import { logout } from "@src/helper/firebase.helper";
import { useUserActions } from "@src/store/actions";
import { useAppSelector } from "@src/store/hooks";
import React from "react";
import { useTranslation } from "react-i18next";

import { Languages } from "../shared";
import Button from "../shared/Button/Button";
import styles from "./style.module.scss";

interface IProps {
  showHandler: () => void;
}

const MainPageHeader: React.FC<IProps> = ({ showHandler }) => {
  const { t } = useTranslation();

  const { user } = useAppSelector((store) => store.userReducer);
  const { logoutAction } = useUserActions();

  const signOutHandler = () => {
    logout();
    logoutAction();
  };

  return (
    <div className={styles.header}>
      <p className={styles.header__userName}>
        {t(LanguageWord.welcome)}: {user.name}
      </p>
      <Button
        text={t(LanguageWord.createNewRoom)}
        className={styles.header__btn}
        clickHandler={showHandler}
      />
      <Button
        clickHandler={signOutHandler}
        className={styles.header__btn}
        text={t(LanguageWord.logout)}
      />
      <Languages />
    </div>
  );
};

export default MainPageHeader;
