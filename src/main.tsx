import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/output.css";

import {
  // Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Projects from "./pages/Projects.tsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
    </Route>,
    // <Route path="*" element={<Navigate to="/" />} />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
