import Header from "./Header";
import About from "./About";
import Skills from "./Skiils";
import Project from "./Project";
import Hire from "./Hire";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.querySelector("body").style.visibility = "visible";
  }, []);
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Project />
      <Hire />
    </>
  );
}

export default Home;
