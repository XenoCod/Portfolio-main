import React from "react";
import { AboutContainer, AboutSection } from "../styles/components/AboutStyle";

function About() {
  return (
    <div>
      <AboutContainer>
        <AboutSection>
          <div className="about">
            <div className="about-title" id="about">
              <span>ABOUT ME</span>
            </div>

            <div className="about-info">
              <div className="about-info-left">
                TO CREATE A POWERFUL PROJECT ONCE, A BIT OF LUCK IS ENOUGH.
              </div>
              <div className="about-info-right">
                I am an aspiring developer looking to put his skills to the
                test. I am self taught, highly motivated, with great
                problem-solving skills and attention to detail. I have a passion
                for learning new things and gaining more knowledge to master my
                craft.
              </div>
            </div>
          </div>
        </AboutSection>
      </AboutContainer>
    </div>
  );
}

export default About;
