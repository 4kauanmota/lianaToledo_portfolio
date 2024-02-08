import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./LinkButton.module.scss";

type LinkButtonType = { link: string; icon: IconProp };

const LinkButton = ({ link, icon }: LinkButtonType) => {
  return (
    <a href={link} target="_blank" className={styles.linkButton}>
      <FontAwesomeIcon icon={icon} color="#fff" />
    </a>
  );
};

export default LinkButton;
