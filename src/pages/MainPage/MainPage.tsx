import CreateNewRoomModal from "@src/components/CreateNewRoomModal/CreateNewRoomModal";
import MainPageHeader from "@src/components/MainPageHeader/MainPageHeader";
import Rooms from "@src/components/Rooms/Rooms";
import Wrapper from "@src/components/Wrapper/Wrapper";
import React, { useState } from "react";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const showHandler = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Wrapper>
        <MainPageHeader showHandler={showHandler} />
        <Rooms />
      </Wrapper>
      {showModal && (
        <CreateNewRoomModal closeModal={closeModal} isShow={showModal} />
      )}
    </>
  );
};

export default MainPage;
