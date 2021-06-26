import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Typewriter from "typewriter-effect";
import React from "react";
import {
  HeaderSection,
  HeaderContainer,
  Sidebar,
} from "../styles/components/HeaderStyles";

function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderSection>
          <div className="title">
            <div className="intro">
              <div className="first">
                I<span className="white">'</span>m
              </div>
              <div className="last">
                <span className="white">Aditya</span>
                <span>Singh</span>
              </div>
            </div>
            <div className="info">
              <Typewriter
                options={{
                  strings: [
                    "< Web Developer />",
                    "{ Software Developer }",
                    "Freelancer",
                    "UI Designer",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "",
                  pauseFor: 1500,
                  deleteSpeed: 75,
                  delay: 75,
                }}
              />
            </div>
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
                  "https://www.linkedin.com/in/aditya-singh-8430771a8/",
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
