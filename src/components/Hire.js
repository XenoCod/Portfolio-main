import React from "react";
import {
  HireMeContainer,
  HireMeSection,
} from "../styles/components/HireStyles";

function Hire() {
  return (
    <div>
      <HireMeContainer>
        <HireMeSection>
          <div className="intro">START WORKING WITH ME</div>
          <div className="title">
            So that's me. There's no other way to put it.
          </div>
          <div className="desc">
            DO YOU HAVE A PROJECT OPPORTUNITY, OR ARE YOU JUST A LOOKING TO GET
            CREATIVE SOLUTIONS?
          </div>
          <div className="start">
            <span className="line"></span>
            GET STARTED.
          </div>
        </HireMeSection>
      </HireMeContainer>
    </div>
  );
}

export default Hire;
