import { Outlet } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default App;
