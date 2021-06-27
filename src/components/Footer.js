import React, { useEffect } from "react";
import {
  FooterSection,
  FooterContainer,
  Copyright,
} from "../styles/components/FooterStyle";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  });
  return (
    <div>
      <FooterContainer>
        <FooterSection>
          <div data-aos="fade-up" className="title">
            Let's create the flexible website for your business.
          </div>
          <div className="address">
            <div data-aos="fade-right" className="state">
              <span>Odisha,India</span>
            </div>
            <div
              data-aos="fade-up"
              className="phone"
              style={{ cursor: "alias" }}
            >
              <span>7008945231</span>
            </div>
            <div
              data-aos="fade-left"
              className="email"
              style={{ cursor: "pointer" }}
            >
              <span>adityakrsingh1999@gmail.com</span>
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
