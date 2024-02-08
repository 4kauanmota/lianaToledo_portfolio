import React from "react";

import styles from "./Title.module.scss";

type TitleType = { children: string };

const Title = ({ children }: TitleType) => {
  return (
    <span className={styles.title}>
      <h1>{children}</h1>
    </span>
  );
};

export default Title;
