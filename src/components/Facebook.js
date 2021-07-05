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
import h1 from "../assets/Project3/main.png";
import p1 from "../assets/Project3/p1.png";
import p2 from "../assets/Project3/p2.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

// import Banner from "../styles/components/Banner";
function Facebook() {
  return (
    <>
      <Supper>
        <HeaderImg src={h1} loading="lazy" />
      </Supper>
      <Container data-aos="fade-up">
        <Title>Facebook</Title>
        <Inner>
          <Mini>Social media App</Mini>
          <Desc>
            <Mini>DESC</Mini>
            Fully responsive made with NextJS & Tailwind CSS. Media/Posts & Text
            upload functionality enabled. Authentication powered by Facebook
            Auth.
          </Desc>
        </Inner>

        <Inline>
          <Mini>Tools used</Mini>
          <Desc>NextJS, TailWind CSS, Firebase</Desc>

          <Mini>Visit</Mini>
          <Desc>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://facebook-ish.vercel.app/", "_blank")
              }
            >
              Project
            </span>
            <br />
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://github.com/XenoCod/Facebook-ish-",
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
                <img src={p1} alt="img1" loading="lazy" />
              </div>

              <div>
                <img src={p2} alt="img2" loading="lazy" />
              </div>

              <div>
                <img src={h1} alt="img3" loading="lazy" />
              </div>
            </Carousel>
          </BannerSection>
        </BannerContainer>
      </Container>
    </>
  );
}

export default Facebook;
