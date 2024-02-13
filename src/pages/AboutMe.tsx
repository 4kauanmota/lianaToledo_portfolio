import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  faBehance,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./AboutMe.module.scss";

import perfil from "../../public/assets/img/perfil.jpeg";
import Title from "../components/atoms/Title";
import LinkButton from "../components/atoms/LinkButton";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const AboutMe = () => {
  return (
    <>
      <Fade style={{ position: "relative", zIndex: "0" }}>
        <section id={styles.aboutMe}>
          <Title>About me</Title>

          <article className={styles.informations}>
            <div className={styles.container}>
              <span className={styles.imageContainer}>
                <img src={perfil} />
              </span>

              <span className={styles.presentation}>
                <h1>Liana Toledo</h1>

                <h3>GRAPHIC DESIGN STUDENT AND ILLUSTRATOR</h3>

                <div className={styles.icons}>
                  <LinkButton
                    link="https://www.behance.net/lianaolito42c1"
                    icon={faBehance}
                  />

                  <LinkButton
                    link="mailto:liana.olitole@gmail.com"
                    icon={faEnvelope}
                  />

                  <LinkButton
                    link="https://www.linkedin.com/in/liana-olitole/"
                    icon={faLinkedinIn}
                  />

                  <LinkButton
                    link="https://www.instagram.com/wannysenpai/"
                    icon={faInstagram}
                  />
                </div>

                <div className={styles.description}>
                  <p>
                    I am 20 years old and I am self-taught, I have been
                    practicing illustration for 8 years and I have experience in
                    illustration through college projects, personal projects and
                    internships. I have intermediate knowledge in Illustrator
                    and Photoshop. I study Design at the Universidade Federal de
                    Juiz de Fora, currently studying the 5th period and this
                    experience allowed me to learn more about concept art, 3D
                    modeling, animation and digital illustration concepts and
                    especially essential Design concepts. I intend to learn more
                    and more and improve myself as much as I can.
                  </p>
                </div>
              </span>
            </div>
          </article>
        </section>
      </Fade>
    </>
  );
};

export default AboutMe;
