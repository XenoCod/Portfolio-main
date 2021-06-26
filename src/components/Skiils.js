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
            Creation of friendly web interface layout
          </div>

          <div className="main">
            <div className="skills">
              <div className="skills-coloum">
                <div className="skill-title">
                  <span className="num">01</span>
                  <span className="line"></span>
                  <span>WORK FLOW PROCESS</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NEXT.JS</li>
                    <li>JAVA</li>
                    <li>PYTHON</li>
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
                  <span>WORK FLOW PROCESS</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NEXT.JS</li>
                    <li>JAVA</li>
                    <li>PYTHON</li>
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
                  <span>WORK FLOW PROCESS</span>
                </div>

                <div className="skill-list">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>NEXT.JS</li>
                    <li>JAVA</li>
                    <li>PYTHON</li>
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
