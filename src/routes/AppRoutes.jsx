import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AboutUs,
  Announce,
  ErrorPage,
  Favourites,
  HomePage,
  Legal,
  RegionsPage,
  ProductPage,
  Profile,
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
        <Route path="legal" element={<Legal />} />
        <Route path="regions" element={<RegionsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;
