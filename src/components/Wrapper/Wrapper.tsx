import React from "react";

import styles from "./style.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
}
const Wrapper: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
