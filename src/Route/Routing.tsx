import { PATHS } from "@src/common/enum";
import { useAuth } from "@src/hooks";
import { Login, MainPage, Register } from "@src/pages";
import GamePage from "@src/pages/GamePage/GamePage";
import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedAuthHOC from "./ProtectedAuthHOC";
import ProtectedHOC from "./ProtectedHOC";

export const Routing = () => {
  const isAuth = useAuth();
  return (
    <Routes>
      <Route
        element={
          <ProtectedHOC isAuth={isAuth}>
            <MainPage />
          </ProtectedHOC>
        }
        path={PATHS.MAIN_PAGE}
      />
      <Route
        path={PATHS.LOGIN}
        element={
          <ProtectedAuthHOC isAuth={isAuth}>
            <Login />
          </ProtectedAuthHOC>
        }
      />
      <Route
        path={PATHS.REGISTER}
        element={
          <ProtectedAuthHOC isAuth={isAuth}>
            <Register />
          </ProtectedAuthHOC>
        }
      />
      <Route element={<GamePage />} path={`${PATHS.GAME}/:id`} />
    </Routes>
  );
};
