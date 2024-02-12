import React, { useEffect, useRef, useState } from "react";
import FsLightbox from "fslightbox-react";

import styles from "./ProjectsOrganization.module.scss";

type ProjectsOrganizationType = { children: any[] };

const ProjectsOrganization = ({ children }: ProjectsOrganizationType) => {
  const [controller, setController] = useState({
    toggler: false,
    slide: 1,
  });
  const [controllerPosition, setControllerPosition] = useState(false);

  const imageViewer = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setControllerPosition(window.innerHeight === screen.height);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
  }, []);

  useEffect(() => {
    if (imageViewer.current.lastElementChild) {
      if (controllerPosition) {
        imageViewer.current.lastElementChild.style.top = "0";
      } else {
        imageViewer.current.lastElementChild.style.top = "11%";
      }
    }
  }, [controllerPosition]);

  function open(number: number) {
    setController({
      toggler: !controller.toggler,
      slide: number,
    });
  }

  // setTimeout(() => {
  //   setController((prev) => ({
  //     ...prev,
  //     slide: 1,
  //   }));
  // }, 5000);

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
