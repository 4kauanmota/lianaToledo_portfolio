import React from "react";

import styles from "./AboutMe.module.scss";

import perfil from "../../public/assets/img/perfil.jpeg";

const AboutMe = () => {
  return (
    <>
      <section id={styles.aboutMe}>
        <article className={styles.informations}>
          <div className={styles.imageContainer}>
            <img src={perfil} />
          </div>

          <div className={styles.text}>
            <h1>Liana Toledo</h1>
            <h3>Game Design, Digital Illustration and Animation.</h3>
            <p>
              I am 20 years old and I am self-taught, I have been practicing
              illustration for 8 years and I have experience in illustration
              through college projects, personal projects and internships.I have
              intermediate knowledge in Illustrator and Photoshop. I study
              Design at the Universidade Federal de Juiz de Fora, currently
              studying the 5th period and this experience allowed me to learn
              more about concept art, 3D modeling, animation and digital
              illustration concepts and especially essential Design concepts. I
              intend to learn more and more and improve myself as much as I can.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutMe;
