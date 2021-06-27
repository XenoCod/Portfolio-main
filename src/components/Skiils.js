import React from "react";
import {
  SkillsContainer,
  SkillsSection,
} from "../styles/components/SkiilsStyles";

function Skiils() {
  return (
    <div>
      <SkillsContainer>
        <SkillsSection>
          <div className="skills-title">
            Building friendly web interface layout with my tools
          </div>

          <div className="main">
            <div className="skills">
              <div className="skills-coloum">
                <div className="skill-title">
                  <span className="num">01</span>
                  <span className="line"></span>
                  <span>FRONT-END</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NEXT JS</li>
                    <li>TAILWIND CSS</li>
                    <li>BOOTSTRAP</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd Coloum */}
            <div className="skills">
              <div className="skills-coloum">
                <div className="skill-title">
                  <span className="num">02</span>
                  <span className="line"></span>
                  <span>BACK-END</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>JAVA</li>
                    <li>PYTHON</li>
                    <li>C#</li>
                    <li>NODE JS</li>
                    <li>EXPRESS JS</li>
                    <li>FIREBASE</li>
                    <li>.NET FRAMEWORK</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd coloum */}

            <div className="skills">
              <div className="skills-coloum">
                <div className="skill-title">
                  <span className="num">03</span>
                  <span className="line"></span>
                  <span>VALUABLES</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>GIT</li>
                    <li>MONGO DB</li>
                    <li>MYSQL</li>
                    <li>MS AZURE</li>
                    <li>AWS</li>
                    <li>POSTMAN</li>
                    <li>ADOBE XD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </SkillsSection>
      </SkillsContainer>
    </div>
  );
}

export default Skiils;
