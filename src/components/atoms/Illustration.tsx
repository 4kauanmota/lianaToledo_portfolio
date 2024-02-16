import React from "react";

import styles from "./Illustration.module.scss";

type IllustrationType = {
  image: string;
};

const Illustration = ({ image }: IllustrationType) => {
  return (
    <div className={styles.illustration}>
      <img src={image} />
    </div>
  );
};

export default Illustration;
