import React, { useEffect } from "react";
import {
  ProjectHeaderSection,
  ProjectHeaderContainer,
} from "../styles/components/ProjectHeaderStyled";
import { Sidebar } from "../styles/components/HeaderStyles";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Navbar from "./Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectHeader() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <Navbar />
      <ProjectHeaderContainer data-aos="zoom-out">
        <ProjectHeaderSection>
          <div data-aos="fade-up" className="title">
            PROJECTS
          </div>
          <Sidebar>
            <div className="socials">
              <Github
                style={{ padding: "20", fontSize: "30", color: "#fff" }}
                onClick={() =>
                  window.open("https://github.com/XenoCod", "_blank")
                }
              />
              <LinkedIn
                style={{ padding: "20", fontSize: "30", color: "#fff" }}
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
        </ProjectHeaderSection>
      </ProjectHeaderContainer>
    </div>
  );
}

export default ProjectHeader;
