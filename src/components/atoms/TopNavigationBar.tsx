import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./TopNavigationBar.module.scss";

const TopNavigationBar = () => {
  const [hideNav, setHideNav] = useState(false);
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
  };

  const unSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    setUrl(null);

    const element = event.target as HTMLElement;
    element.classList.remove(styles.selected);
  };

  const menuInteraction = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = event.currentTarget as HTMLElement;

    element.classList.contains(styles.open)
      ? element.classList.remove(styles.open)
      : element.classList.add(styles.open);
  };

  useEffect(() => {
    const handleResize = () => {
      setHideNav(window.innerHeight === screen.height);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
  }, []);

  return (
    <nav
      id={styles.menu}
      style={{ display: hideNav ? "none" : "inline-block" }}
    >
      <div>
        <Link to={"/"}>
          <span onClick={() => setUrl(null)}>
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
          <li onMouseOver={select} onMouseOut={unSelect} onClick={select}>
            <Link ref={aboutMe} to={"/"}>
              About me
            </Link>
          </li>

          <li onMouseOver={select} onMouseOut={unSelect} onClick={select}>
            <Link ref={illustrations} to={"/illustrations"}>
              Illustrations
            </Link>
          </li>

          <li onMouseOver={select} onMouseOut={unSelect} onClick={select}>
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
