import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ProjectHeader from "./components/ProjectHeader";
import AboutMain from "./components/AboutMain";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Loading } from "./styles/components/LoadingStyle";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About Me", Component: AboutMain },
  { path: "/projects", name: "Projects", Component: Project },
  { path: "/menu", name: "Menu", Component: Menu },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);

  return (
    <div className="App">
      {!isPageLoaded ? (
        <Loading>
          <PacmanLoader color={"#36D7B7"} loading={isPageLoaded} size={25} />
          <br />
          LOADING
        </Loading>
      ) : (
        <>
          <Navbar />
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {path === "/projects" ? (
                <>
                  <ProjectHeader />
                  <Project />
                  <Footer />
                </>
              ) : (
                <>
                  <Component />
                  <Footer />
                </>
              )}
            </Route>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
