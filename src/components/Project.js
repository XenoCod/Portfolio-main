import React, { useEffect } from "react";
import p1 from "../assets/Project5/p1.png";
import p2 from "../assets/Project1/p9.jpg";
import p3 from "../assets/Project3/main.png";
import p4 from "../assets/Project2/p1.png";
import p5 from "../assets/Project4/p1.png";

import { useHistory } from "react-router";

import {
  ProjectContainer,
  ProjectSection,
  ProjectDiv,
  ProjectImg,
  ProjectImgDiv,
  ProjectName,
  Left,
  ProjectBtn,
} from "../styles/components/ProjectStyles";
import Aos from "aos";
import "aos/dist/aos.css";

function Project() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  const history = useHistory();
  return (
    <div>
      <ProjectContainer>
        <div className="project-title">
          <span>Selected works and showcases</span>
        </div>
        <ProjectSection>
          {/* PROJECT 1 */}
          <ProjectDiv data-aos="zoom-out-up">
            <Left>
              <ProjectImgDiv>
                <ProjectImg src={p1} loading="lazy" />
              </ProjectImgDiv>
            </Left>

            <ProjectName onClick={() => history.push("/amazon")}>
              Amazon<span className="sub-topic">e-commerce App</span>
              <ProjectBtn>
                <span>Learn More</span>
              </ProjectBtn>
            </ProjectName>
          </ProjectDiv>

          {/* PROJECT 2 */}
          <ProjectDiv data-aos="zoom-out-up">
            <Left>
              <ProjectName onClick={() => history.push("/netflix")}>
                Netflix <span className="sub-topic">Clone</span>
                <ProjectBtn>
                  {" "}
                  <span onClick={() => history.push("/netflix")}>
                    Learn More
                  </span>
                </ProjectBtn>
              </ProjectName>
            </Left>
            <ProjectImgDiv>
              <ProjectImg src={p2} loading="lazy" />
            </ProjectImgDiv>
          </ProjectDiv>

          {/* PROJECT 3 */}
          <ProjectDiv data-aos="zoom-out-up">
            <Left>
              <ProjectImgDiv>
                <ProjectImg src={p3} loading="lazy" />
              </ProjectImgDiv>
            </Left>

            <ProjectName onClick={() => history.push("/facebook")}>
              Social<span className="sub-topic">Media App</span>
              <ProjectBtn>
                {" "}
                <span>Learn More</span>
              </ProjectBtn>
            </ProjectName>
          </ProjectDiv>

          {/* PROJECT 4 */}

          <ProjectDiv data-aos="zoom-out-up">
            <Left>
              <ProjectName onClick={() => history.push("/channel")}>
                Channel <span className="sub-topic">Chat App</span>
                <ProjectBtn>
                  {" "}
                  <span>Learn More</span>
                </ProjectBtn>
              </ProjectName>
            </Left>

            <ProjectImgDiv>
              <ProjectImg src={p4} loading="lazy" />
            </ProjectImgDiv>
          </ProjectDiv>

          {/* PROJECT 5 */}
          <ProjectDiv data-aos="zoom-out-up">
            <Left>
              <ProjectImgDiv>
                <ProjectImg src={p5} loading="lazy" />
              </ProjectImgDiv>
            </Left>

            <ProjectName onClick={() => history.push("/groupify")}>
              Groupify <span className="sub-topic">Group chat App</span>
              <ProjectBtn>
                <span>Learn More</span>
              </ProjectBtn>
            </ProjectName>
          </ProjectDiv>

          {/* PROJECT 5 */}
        </ProjectSection>
        {/* 
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
        </div> */}
      </ProjectContainer>
    </div>
  );
}

export default Project;
