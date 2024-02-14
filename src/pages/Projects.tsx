import React from "react";

import styles from "./Projects.module.scss";

import { Fade } from "react-awesome-reveal";
import Title from "../components/atoms/Title";
import Project from "../components/atoms/Project";
import ProjectsOrganization from "../components/molecules/ProjectsOrganization";

const Projects = () => {
  return (
    <>
      <Fade style={{ position: "relative", zIndex: "0" }}>
        <section id={styles.projects}>
          <Title>Projects</Title>

          <ProjectsOrganization>
            <Project
              thumb="https://i.postimg.cc/fyqVQYfX/serafleur.png"
              content="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ca8aae187066139.65810d5ae8737.jpg"
            />

            <Project
              thumb="https://i.postimg.cc/J0zsFpZM/academify.png"
              content="https://mir-s3-cdn-cf.behance.net/project_modules/1400/eb59eb186984703.657f94f906819.jpg"
            />
          </ProjectsOrganization>
        </section>
      </Fade>
    </>
  );
};

export default Projects;
