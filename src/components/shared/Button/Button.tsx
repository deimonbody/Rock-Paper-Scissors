import React from "react";

import styles from "./style.module.scss";

interface IProps {
  text: string;
  clickHandler?: () => void;
  className?: string;
}

const Button: React.FC<IProps> = ({ text, clickHandler, className }) => {
  return (
    <button onClick={clickHandler} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
