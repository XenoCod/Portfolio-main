import React from "react";
import {
  Mini,
  Desc,
  Container,
  Title,
  Supper,
  Inner,
  Inline,
} from "../styles/components/DisplayStyles";
import { HeaderImg } from "../styles/components/HeaderStyles";

import p1 from "../assets/Project4/p1.png";
import p2 from "../assets/Project4/p2.png";
import p3 from "../assets/Project4/p3.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

// import Banner from "../styles/components/Banner";

function Groupify() {
  return (
    <>
      <Supper>
        <HeaderImg src={p1} />
      </Supper>
      <Container data-aos="fade-up">
        <Title>Groupify</Title>
        <Inner>
          <Mini>Group chat App</Mini>
          <Desc>
            <Mini>DESC</Mini>A group chat that enables users to form & chat
            within groups with the help of EmailID.
          </Desc>
        </Inner>

        <Inline>
          <Mini>Tools used</Mini>
          <Desc>React, Redux, Material UI, Firebase</Desc>

          <Mini>Visit</Mini>
          <Desc>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://slack-x-c8c12.web.app/", "_blank")
              }
            >
              Project
            </span>
            <br />
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://github.com/XenoCod/Groupify-A-group-chat-application",
                  "_blank"
                )
              }
            >
              Github
            </span>
          </Desc>
        </Inline>
        <BannerContainer>
          <BannerSection>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={2500}
            >
              <div>
                <img src={p1} alt="" />
              </div>

              <div>
                <img src={p2} alt="" />
              </div>

              <div>
                <img src={p3} alt="" />
              </div>
            </Carousel>
          </BannerSection>
        </BannerContainer>
      </Container>
    </>
  );
}

export default Groupify;
