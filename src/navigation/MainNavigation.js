import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../pages";

function MainNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" exact element={<div>testing</div>} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default MainNavigation;
