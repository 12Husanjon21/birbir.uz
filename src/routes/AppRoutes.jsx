import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import Layout from "../layouts";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
