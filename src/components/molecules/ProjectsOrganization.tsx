import React, { useRef, useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from "./ProjectsOrganization.module.scss";
import useNavStore from "../../store/NavStore";

type ProjectsOrganizationType = { children: any[] };

const ProjectsOrganization = ({ children }: ProjectsOrganizationType) => {
  const { showNav } = useNavStore();

  const [controller, setController] = useState({
    toggler: false,
    slide: 1,
  });

  const imageViewer = useRef(null);

  function open(number: number) {
    showNav();

    setController({
      toggler: !controller.toggler,
      slide: number,
    });
  }

  return (
    <>
      <ul className={styles.projects}>
        {children.map((project, index) => (
          <li onClick={() => open(index + 1)} key={Math.random().toString()}>
            {project}
          </li>
        ))}
      </ul>

      <div ref={imageViewer} className={styles.imageViewer}>
        <FsLightbox
          toggler={controller.toggler}
          slide={controller.slide}
          exitFullscreenOnClose
          onClose={() => showNav()}
          slideDistance={0.001}
          sources={children.map((el) => (
            <div
              key={Math.random().toString()}
              className={styles.fullImageContainer}
            >
              <img className={styles.fullImage} src={el.props.content} />
            </div>
          ))}
        />
      </div>
    </>
  );
};

export default ProjectsOrganization;
