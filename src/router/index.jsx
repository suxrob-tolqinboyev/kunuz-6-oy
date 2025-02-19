import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/home";
import Sport from "../pages/Sport";
import Jahon from "../pages/Jahon";
import Jamiyat from "../pages/Jamiyat";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/jahon" element={<Jahon />} />
      <Route path="/jamiyat" element={<Jamiyat />} />
    </Routes>
  );
};

export default Router;
