import React from "react";

import styles from "./Illustrations.module.scss";
import { Fade } from "react-awesome-reveal";
import Title from "../components/atoms/Title";
import IllustrationsOrganization from "../components/molecules/IllustrationsOrganization";
import Illustration from "../components/atoms/Illustration";

const Illustrations = () => {
  return (
    <>
      <Fade>
        <section id={styles.illustrations}>
          <Title>Illustrations</Title>

          <IllustrationsOrganization>
            <Illustration image="http://placekitten.com/200" />

            <Illustration image="http://placekitten.com/300/400" />

            <Illustration image="http://placekitten.com/300/700" />

            <Illustration image="http://placekitten.com/200/300" />

            <Illustration image="http://placekitten.com/400" />

            <Illustration image="http://placekitten.com/400/200" />
          </IllustrationsOrganization>
        </section>
      </Fade>
    </>
  );
};

export default Illustrations;
