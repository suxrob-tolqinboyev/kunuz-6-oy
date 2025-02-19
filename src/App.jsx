import React from "react";
import Router from "./router";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
};

export default App;
