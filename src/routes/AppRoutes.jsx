import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Announce,
  ErrorPage,
  Favourites,
  HomePage,
  RegionsPage,
} from "../pages";
import Layout from "../layouts";

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="/favourites/*" element={<Favourites />} />
        <Route path="announce" element={<Announce />} />
        <Route path="regionspage" element={<RegionsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
