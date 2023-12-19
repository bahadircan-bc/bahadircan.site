"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import dynamic from "next/dynamic";
// import "../styles/output.css";

const Timeline = dynamic(
  () => import("./components/Timeline"),
  { ssr: false }
)

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Timeline />
    </>
  );
}

export default Home;
