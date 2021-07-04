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
import ReactGA from "react-ga";
import LazyLoad from "react-lazyload";
import Netflix from "./components/Netflix";
import Groupify from "./components/Groupify";
import Channel from "./components/Channel";
import Facebook from "./components/Facebook";
import Amazon from "./components/Amazon";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About Me", Component: AboutMain },
  { path: "/projects", name: "Projects", Component: Project },
  { path: "/menu", name: "Menu", Component: Menu },
  { path: "/netflix", name: "Netflix", Component: Netflix },
  { path: "/groupify", name: "Groupify", Component: Groupify },
  { path: "/channel", name: "Channel", Component: Channel },
  { path: "/facebook", name: "Facebook", Component: Facebook },
  { path: "/amazon", name: "Amazon", Component: Amazon },
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

  useEffect(() => {
    ReactGA.initialize("UA-200768417-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

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
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Navbar />
              {path === "/projects" ? (
                <LazyLoad key={path} placeholder={<Loading />}>
                  <ProjectHeader />
                  <Project />
                  <Footer />
                </LazyLoad>
              ) : (
                <LazyLoad key={path} placeholder={<Loading />}>
                  <Component />
                  <Footer />
                </LazyLoad>
              )}
            </Route>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
