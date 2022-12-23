import { PATHS } from "@src/common/enum";
import { IProtectedRoute } from "@src/common/interface";
import { Loader } from "@src/components/shared";
import { useLoading } from "@src/hooks";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAuthHOC = ({ children, isAuth }: IProtectedRoute) => {
  const isLoading = useLoading();
  if (isLoading) return <Loader />;
  return !isAuth ? children : <Navigate to={PATHS.MAIN_PAGE} />;
};

export default ProtectedAuthHOC;
