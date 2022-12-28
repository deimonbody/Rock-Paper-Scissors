import React from "react";

import styles from "./style.module.scss";

interface IProps {
  src: string;
  title: string;
  gameBlockStyle: string;
  gameWrapperStyle: string;
}

const ElementBlock: React.FC<IProps> = ({
  src,
  title,
  gameBlockStyle,
  gameWrapperStyle,
}) => {
  return (
    <div className={`${styles.gameBlockWrapper} ${gameWrapperStyle}`}>
      <div className={`${styles.gameBlock} ${gameBlockStyle}`}>
        <img src={src} className={styles.gameBlock__img} alt="Game Block" />
      </div>
      <p className={styles.gameBlock__title}>{title}</p>
    </div>
  );
};

export default ElementBlock;
