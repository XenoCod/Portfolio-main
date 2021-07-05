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
import p1 from "../assets/Project6/p1.png";
import p2 from "../assets/Project6/p2.png";
import p3 from "../assets/Project6/p3.png";
import p4 from "../assets/Project6/p4.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

// import Banner from "../styles/components/Banner";
function Facebook() {
  return (
    <>
      <Supper>
        <HeaderImg src={p1} loading="lazy" />
      </Supper>
      <Container data-aos="fade-up">
        <Title>FlimZiila</Title>
        <Inner>
          <Mini>Streaming website</Mini>
          <Desc>
            <Mini>DESC</Mini>
            Responsive movie poster website with custom animations. Movie
            posters pulled with the help of TMDB api.
          </Desc>
        </Inner>

        <Inline>
          <Mini>Tools used</Mini>
          <Desc>NextJS, TailWind CSS, TMDI api</Desc>

          <Mini>Visit</Mini>
          <Desc>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://film-zilla.vercel.app/", "_blank")
              }
            >
              Project
            </span>
            <br />
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://github.com/XenoCod/FilmZilla", "_blank")
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
                <img src={p1} alt="img 1" loading="lazy" />
              </div>

              <div>
                <img src={p2} alt="img 2" loading="lazy" />
              </div>

              <div>
                <img src={p3} alt="img 3" loading="lazy" />
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

export default Facebook;
