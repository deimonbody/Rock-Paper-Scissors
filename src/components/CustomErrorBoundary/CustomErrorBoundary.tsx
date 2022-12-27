import React from "react";

import styles from "./style.module.scss";

interface IProps {
  error: Error;
}

const CustomErrorBoundary: React.FC<IProps> = ({ error }) => (
  <div className={styles.errorWrapper}>
    <p className={styles.errorMessage}>
      Ooooops...Something Went wrong :( <br />
      Try to reload the page
    </p>
  </div>
);

export default CustomErrorBoundary;
