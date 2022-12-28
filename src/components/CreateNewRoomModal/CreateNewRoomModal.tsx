import { joiResolver } from "@hookform/resolvers/joi";
import { LanguageWord } from "@src/common/enum";
import { ICreateNewRoom } from "@src/common/interface";
import { createNewRoomSchema } from "@src/common/schemas";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Button from "../shared/Button/Button";
import styles from "./style.module.scss";

interface IProps {
  closeModal: () => void;
  isShow?: boolean;
}

const CreateNewRoomModal: React.FC<IProps> = ({ closeModal, isShow }) => {
  const { t } = useTranslation();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ICreateNewRoom>({
    mode: "onChange",
    defaultValues: {
      roomName: "",
    },
    resolver: joiResolver(createNewRoomSchema),
  });

  const closeHandler = () => {
    reset();
    closeModal();
  };

  const clickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target && target.getAttribute("id") === "modal") {
      closeHandler();
    }
  };

  useEffect(() => {
    const bodyElement = document.body;
    if (isShow) {
      bodyElement.addEventListener("click", clickHandler);
    }
    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, [isShow]);

  const createHanlder = (data: ICreateNewRoom) => {
    reset();
    closeModal();
  };

  return (
    <div className={styles.modalWrapper} id="modal">
      <div className={styles.modal}>
        <p className={styles.modal__title}>{t(LanguageWord.createNewRoom)}</p>
        <div className={styles.modal__inpBlock}>
          <input
            {...register("roomName")}
            placeholder="name:"
            className={styles.modal__inp}
          />
          {errors && errors.roomName && (
            <p className={styles.modal__inpError}>{errors.roomName.message}</p>
          )}
        </div>
        <div className={styles.modal__control}>
          <Button
            text={t(LanguageWord.create)}
            clickHandler={handleSubmit(createHanlder)}
            className={`${styles.modal__btn} ${styles.modal__btn_first}`}
          />
          <Button
            text={t(LanguageWord.close)}
            clickHandler={closeHandler}
            className={styles.modal__btn}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewRoomModal;
