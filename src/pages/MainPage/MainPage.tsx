import { LanguageWord } from "@src/common/enum";
import { Languages } from "@src/components/shared";
import { logout } from "@src/helper/firebase.helper";
import { useUserActions } from "@src/store/actions";
import React from "react";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  const { logoutAction } = useUserActions();
  const signOutHandler = () => {
    logout();
    logoutAction();
  };
  return (
    <div>
      <p>Main page</p>
      <button onClick={signOutHandler}>{t(LanguageWord.logout)}</button>
      <Languages />
    </div>
  );
};

export default MainPage;
