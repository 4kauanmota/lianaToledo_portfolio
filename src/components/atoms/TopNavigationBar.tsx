import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useNavStore from "../../store/NavStore";

import styles from "./TopNavigationBar.module.scss";

const TopNavigationBar = () => {
  const { nav } = useNavStore();

  const [url, setUrl] = useState(null);

  const menu = useRef(null);
  const aboutMe = useRef(null);
  const illustrations = useRef(null);
  const projects = useRef(null);

  useEffect(() => {
    const currentUrl = location.pathname;
    setUrl(currentUrl);

    aboutMe.current.classList.remove(styles.selected);
    illustrations.current.classList.remove(styles.selected);
    projects.current.classList.remove(styles.selected);

    if (url === "/") {
      aboutMe.current.classList.add(styles.selected);
    } else if (url === "/illustrations") {
      illustrations.current.classList.add(styles.selected);
    } else if (url === "/projects") {
      projects.current.classList.add(styles.selected);
    }
  }, [url]);

  const select = (event: React.MouseEvent<HTMLLIElement>) => {
    setUrl(null);

    const element = event.target as HTMLElement;
    element.classList.add(styles.selected);

    if (menu.current.classList.contains(styles.open)) {
      menuInteraction();
    }
  };

  const menuInteraction = () => {
    const element = menu.current;

    element.classList.contains(styles.open)
      ? element.classList.remove(styles.open)
      : element.classList.add(styles.open);
  };

  return (
    <nav
      id={styles.menu}
      style={nav ? null : { opacity: "0", pointerEvents: "none" }}
    >
      <div>
        <Link to={"/"}>
          <span
            onClick={() => {
              setUrl(null);
              if (menu.current.classList.contains(styles.open)) {
                menuInteraction();
              }
            }}
          >
            <h1>Liana Toledo</h1>
          </span>
        </Link>

        <button
          ref={menu}
          className={styles.hamburguerMenu}
          onClick={menuInteraction}
        >
          <span></span>
        </button>

        <ul>
          <li onClick={select}>
            <Link ref={aboutMe} to={"/"}>
              About me
            </Link>
          </li>

          <li onClick={select}>
            <Link ref={illustrations} to={"/illustrations"}>
              Illustrations
            </Link>
          </li>

          <li onClick={select}>
            <Link ref={projects} to={"/projects"}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavigationBar;
