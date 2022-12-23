import React from "react";

import styles from "./style.module.scss";

const Loader = () => {
  return (
    <div className={styles.LoaderBalls}>
      <div className={styles.LoaderBalls__item} />
      <div className={styles.LoaderBalls__item} />
      <div className={styles.LoaderBalls__item} />
    </div>
  );
};

export default Loader;
