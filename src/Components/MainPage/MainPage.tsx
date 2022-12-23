import { logout } from "@src/helper/firebase.helper";
import { useUserActions } from "@src/store/actions";
import React from "react";

const MainPage = () => {
  const { logoutAction } = useUserActions();
  const signOutHandler = () => {
    logout();
    logoutAction();
  };
  return (
    <div>
      <p>Main page</p>
      <button onClick={signOutHandler}>Logout</button>
    </div>
  );
};

export default MainPage;
