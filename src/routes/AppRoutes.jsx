import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
