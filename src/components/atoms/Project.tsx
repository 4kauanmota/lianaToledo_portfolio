import React from "react";

import styles from "./Project.module.scss";

type ProjectType = { content?: string };

const Project = ({ content }: ProjectType) => {
  return (
    <>
      <article className={styles.project}>
        <img src={content} className={styles.content} />
      </article>
    </>
  );
};

export default Project;
