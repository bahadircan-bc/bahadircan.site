import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default App;
