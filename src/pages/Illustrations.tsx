import React from "react";

import styles from "./Illustrations.module.scss";
import { Fade } from "react-awesome-reveal";
import Title from "../components/atoms/Title";
import Project from "../components/atoms/Project";
import ListOrganization from "../components/molecules/ProjectsOrganization";

const Illustrations = () => {
  return (
    <>
      <Fade style={{ height: "100%" }}>
        <section id={styles.illustrations}>
          <Title>Illustrations</Title>
        </section>
      </Fade>
    </>
  );
};

export default Illustrations;
