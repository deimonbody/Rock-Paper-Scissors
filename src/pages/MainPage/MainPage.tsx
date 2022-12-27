import MainPageHeader from "@src/components/MainPageHeader/MainPageHeader";
import Rooms from "@src/components/Rooms/Rooms";
import Wrapper from "@src/components/Wrapper/Wrapper";
import React from "react";

const MainPage = () => {
  return (
    <Wrapper>
      <MainPageHeader />
      <Rooms />
    </Wrapper>
  );
};

export default MainPage;
