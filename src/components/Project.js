import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import {
  ProjectContainer,
  ProjectSection,
} from "../styles/components/ProjectStyles";

function Project() {
  return (
    <div>
      <ProjectContainer>
        <div className="project-title">
          <span>Selected works and showcases</span>
        </div>
        <ProjectSection>
          <div className="projects">
            <div className="projects-summary">
              <div className="projects-title">
                Netflix <span className="sub-topic"> clone</span>{" "}
                <img
                  src={p1}
                  alt=""
                  loading="lazy"
                  onClick={() =>
                    window.open(
                      "https://netflix-clone-71028.web.app/",
                      "_blank"
                    )
                  }
                />
              </div>
            </div>

            <div className="projects-summary">
              <div className="projects-title">
                <img
                  src={p2}
                  alt=""
                  loading="lazy"
                  onClick={() =>
                    window.open("https://facebook-ish.vercel.app/", "_blank")
                  }
                />
                Facebook<span className="sub-topic">Social media clone</span>{" "}
              </div>
            </div>

            <div className="projects-summary">
              <div className="projects-title">
                <img
                  src={p3}
                  alt=""
                  loading="lazy"
                  onClick={() =>
                    window.open("https://channel-opal.vercel.app/", "_blank")
                  }
                />
                Channel <span className="sub-topic">Chat App</span>
              </div>
            </div>

            <div className="projects-summary">
              <div className="projects-title">
                <img
                  src={p4}
                  alt=""
                  loading="lazy"
                  onClick={() =>
                    window.open("https://slack-x-c8c12.web.app/", "_blank")
                  }
                />
                Groupify <span className="sub-topic">Group chat App</span>
              </div>
            </div>
          </div>
        </ProjectSection>

        <div class="button-container">
          <button
            class="btn btn-shadow"
            onClick={() =>
              window.open(
                "https://github.com/XenoCod?tab=repositories",
                "_blank"
              )
            }
          >
            Source Code & More
          </button>
        </div>
      </ProjectContainer>
    </div>
  );
}

export default Project;
