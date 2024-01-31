import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Illustrations from "./pages/Illustrations";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

import Error404 from "./pages/Error404";
import TopNavigationBar from "./components/atoms/TopNavigationBar";

const Pages = () => {
  return (
    <>
      <Router>
        <div style={{ height: "11%" }}>
          <TopNavigationBar />
        </div>

        <Routes>
          <Route path="/">
            <Route index={true} element={<AboutMe />} />
            <Route path="illustrations" element={<Illustrations />} />
            <Route path="projects" element={<Projects />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
