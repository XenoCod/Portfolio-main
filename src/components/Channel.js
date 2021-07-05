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
import p1 from "../assets/Project2/p1.png";
import p2 from "../assets/Project2/p2.png";
import p3 from "../assets/Project2/p3.png";
import p4 from "../assets/Project2/p4.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

function Channel() {
  return (
    <>
      <Supper>
        <HeaderImg src={p1} loading="lazy" />
      </Supper>
      <Container data-aos="fade-up">
        <Title>Channel</Title>
        <Inner>
          <Mini>Email Chat App</Mini>
          <Desc>
            <Mini>DESC</Mini>A chat app where user can chat person using
            recipient email.
          </Desc>
        </Inner>

        <Inline>
          <Mini>Tools</Mini>
          <Desc>NextJS, Styled components, Firebase</Desc>

          <Mini>Visit</Mini>
          <Desc>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://channel-opal.vercel.app/", "_blank")
              }
            >
              Project
            </span>
            <br />
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/XenoCod/Channel", "_blank")
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
                <img src={p1} alt="img1" loading="lazy" />
              </div>

              <div>
                <img src={p2} alt="img2" loading="lazy" />
              </div>

              <div>
                <img src={p3} alt="img3" loading="lazy" />
              </div>
              <div>
                <img src={p4} alt="img 4" loading="lazy" />
              </div>
            </Carousel>
          </BannerSection>
        </BannerContainer>
      </Container>
    </>
  );
}

export default Channel;
