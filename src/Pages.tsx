import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Illustrations from "./pages/Illustrations";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";

import Error404 from "./pages/Error404";

const Pages = () => {
  return (
    <>
      <Router>
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
