import React, { useRef, useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from "./IllustrationsOrganization.module.scss";
import useNavStore from "../../store/NavStore";

type IllustrationsOrganizationType = { children: any[] };

const IllustrationsOrganization = ({
  children,
}: IllustrationsOrganizationType) => {
  const { showNav } = useNavStore();

  const [controller, setController] = useState({
    toggler: false,
    slide: 1,
  });

  function open(number: number) {
    showNav();

    setController({
      toggler: !controller.toggler,
      slide: number,
    });
  }

  return (
    <>
      <ul className={styles.illustrations}>
        {children.map((project, index) => (
          <li onClick={() => open(index + 1)} key={Math.random().toString()}>
            {project}
          </li>
        ))}
      </ul>

      <div className={styles.imageViewer}>
        <FsLightbox
          toggler={controller.toggler}
          slide={controller.slide}
          exitFullscreenOnClose
          onClose={() => showNav()}
          sources={children.map((el) => (
            <div
              key={Math.random().toString()}
              className={styles.fullImageContainer}
            >
              <img className={styles.fullImage} src={el.props.image} />
            </div>
          ))}
        />
      </div>
    </>
  );
};

export default IllustrationsOrganization;
