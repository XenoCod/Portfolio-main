import React, { useEffect } from "react";
import { AboutContainer, AboutSection } from "../styles/components/AboutStyle";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({ duration: 900 });
  });
  return (
    <div data-aos="fade-up">
      <AboutContainer>
        <AboutSection>
          <div className="about">
            <div className="about-title" id="about">
              <span>ABOUT ME</span>
            </div>

            <div className="about-info">
              <div data-aos="fade-left" className="about-info-left">
                TO CREATE A POWERFUL PROJECT ONCE, A BIT OF LUCK IS ENOUGH.
              </div>
              <div data-aos="fade-right" className="about-info-right">
                Hii, I'm currently working as SDE 1 at Swiggy, Bangalore. I am self taught, highly motivated, with great
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
