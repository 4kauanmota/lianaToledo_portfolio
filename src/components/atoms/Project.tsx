import React from "react";

import styles from "./Project.module.scss";

type ProjectType = { thumb: string; content: string };

const Project = ({ thumb, content }: ProjectType) => {
  return (
    <>
      <article className={styles.project}>
        <img src={thumb} loading="lazy" />
      </article>
    </>
  );
};

export default Project;
