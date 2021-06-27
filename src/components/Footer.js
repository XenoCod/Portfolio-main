import React from "react";
import {
  FooterSection,
  FooterContainer,
  Copyright,
} from "../styles/components/FooterStyle";

function Footer() {
  return (
    <div>
      <FooterContainer>
        <FooterSection>
          <div className="title">
            Let's create the flexible website for your business.
          </div>
          <div className="address">
            <div className="state">Odisha,India</div>
            <div className="phone" style={{ cursor: "alias" }}>
              7008945231
            </div>
            <div className="email" style={{ cursor: "pointer" }}>
              adityakrsingh1999@gmail.com
            </div>
          </div>
          <div className="social">
            <div className="social-title">CONNECT WITH ME</div>
            <div className="social-links">
              <div className="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/aditya-singh-8430771a8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LINKEDIN
                </a>
              </div>
              <div className="github">
                <a
                  href="https://github.com/XenoCod"
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </FooterSection>
      </FooterContainer>
      <Copyright>
        Made with &#10084;&#65039; by Aditya Singh. Copyright &#169; 2021
      </Copyright>
    </div>
  );
}

export default Footer;
