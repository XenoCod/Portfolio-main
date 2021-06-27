import React, { useEffect } from "react";
import {
  HireMeContainer,
  HireMeSection,
} from "../styles/components/HireStyles";
import Aos from "aos";
import "aos/dist/aos.css";

function Hire() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  return (
    <div>
      <HireMeContainer>
        <HireMeSection>
          <div data-aos="fade-up" className="intro">
            START WORKING WITH ME
          </div>
          <div data-aos="fade-up" className="title">
            So that's me. There's no other way to put it.
          </div>
          <div data-aos="fade-down" className="desc">
            DO YOU HAVE A PROJECT OPPORTUNITY, OR ARE YOU JUST A LOOKING TO GET
            CREATIVE SOLUTIONS?
          </div>
          <div
            data-aos="fade-down"
            className="start"
            onClick={() =>
              window.open("https://www.linkedin.com/in/aditya-singh-8430771a8/")
            }
          >
            <span className="line"></span>
            GET STARTED.
          </div>
        </HireMeSection>
      </HireMeContainer>
    </div>
  );
}

export default Hire;
