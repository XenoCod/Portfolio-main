import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
// import Typewriter from "typewriter-effect";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderSection,
  HeaderContainer,
  Sidebar,
  HeaderImg,
} from "../styles/components/HeaderStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";
import bg from "../assets/demo2.jpg";

const ViewResume = () => {
  window.open(
    "https://drive.google.com/file/d/1x6xBsTnqBvmehkUhho7LSlsZSyUtVB0u/view?usp=sharing"
  );
  ReactGA.event({
    category: "Button",
    action: "Show Resume",
  });
};

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });
  return (
    <div>
      <HeaderContainer>
        <HeaderImg src={bg} />
        <HeaderSection>
          <div data-aos="fade-up" className="title">
            <div className="intro">
              <div className="first">
                I<span className="white">'</span>m
              </div>
              <div className="last">
                <span className="white">Aditya</span>
                <span>Singh</span>
              </div>
            </div>
            {/* <div className="info">
              <Typewriter options={options} />
            </div> */}
          </div>
          <div className="resume">
            <button>
              <Link
                onClick={ViewResume}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                View Resume
              </Link>
            </button>
          </div>
        </HeaderSection>
        <Sidebar>
          <div className="socials">
            <Github
              style={{ padding: "20", fontSize: "30", color: "white" }}
              onClick={() =>
                window.open("https://github.com/XenoCod", "_blank")
              }
            />
            <LinkedIn
              style={{ padding: "20", fontSize: "30", color: "white" }}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/adityasingh0007/",
                  "_blank"
                )
              }
            />
          </div>

          <div className="scroll-down">
            <span className="title">SCROLL DOWN</span>
            <span className="after"></span>
          </div>
        </Sidebar>
      </HeaderContainer>
    </div>
  );
}

export default Header;
