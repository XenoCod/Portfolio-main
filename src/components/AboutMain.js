import React from "react";
import {
  AboutMeHeader,
  AboutMeContainer,
  AboutMeSection,
} from "../styles/components/AboutMainStyles";
import { Sidebar } from "../styles/components/HeaderStyles";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

function AboutMain() {
  return (
    <div>
      <AboutMeContainer>
        <AboutMeHeader>
          <div className="title">ABOUT ME</div>
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
        </AboutMeHeader>
        <AboutMeSection>
          <div className="intro">
            <div className="desc">SMOOTH INTERFACE INTERACTION</div>
            <div className="main-title">
              Reach me and let's have coffee together !!
            </div>
            <div className="my-info">
              <p>
                My name is Aditya Kumar Singh and I'm a full stack developer,
                completed my{" "}
                <b>
                  <em>Bachelor of Technology in Electrical & Electronics</em>
                </b>{" "}
                <u style={{ color: "#2EC4B6" }}> from KIIT University.</u>
              </p>
              <p>
                I'm a full stack developer with more than 3 years of experience
                working on website and single page web apps. My go-to
                programming language is <em>JavaScript</em>. When it comes to
                programming I enjoy the challenging stuff and always try to find
                the right solution for a problem.
              </p>
              <p>I have also done developed few Andriod apps in Java.</p>
              <p>
                I'm a sports enthusiast and like to play & watch sports. I've
                always been a fan of Football & Manchester United.
              </p>
            </div>
          </div>
        </AboutMeSection>
      </AboutMeContainer>
    </div>
  );
}

export default AboutMain;
