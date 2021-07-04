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
import p1 from "../assets/Project5/p1.png";
import p2 from "../assets/Project5/p2.png";
import p3 from "../assets/Project5/p3.png";
import p4 from "../assets/Project5/p4.png";
import p5 from "../assets/Project5/p5.png";
import p6 from "../assets/Project5/p6.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

function Amazon() {
  return (
    <>
      <>
        <Supper>
          <HeaderImg src={p1} loading="lazy" />
        </Supper>
        <Container data-aos="fade-up">
          <Title>Amazon-X</Title>
          <Inner>
            <Mini>E-commerce App</Mini>
            <Desc>
              <Mini>DESC</Mini>
              Amazon redesign with TailWind CSS, complete E-Commerce
              functionality including Payment Processing (Stripe API) and User
              Authentication (Firebase).
              <br />
              <Mini>
                Try out the Payment feature using demo card details below:
              </Mini>
              <br />
              (Fill the shipping information with random details and use the
              Card details mentioned below)
              <br />
              <b>Card number</b>: 4242 4242 4242 4242
              <br />
              <b>MM/YY</b>: 04 / 24
              <br />
              <b>CVC</b>: 424
            </Desc>
          </Inner>

          <Inline>
            <Mini>Tools Used</Mini>
            <Desc>
              NextJS, FakeStore API, Stripe API, Firebase, Tailwind CSS
            </Desc>

            <Mini>Visit</Mini>
            <Desc>
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://e-commerce-app-lyart.vercel.app/",
                    "_blank"
                  )
                }
              >
                Project
              </span>
              <br />
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/XenoCod/E-commerce-App",
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
                <div>
                  <img src={p4} alt="" />
                </div>
                <div>
                  <img src={p5} alt="" />
                </div>
                <div>
                  <img src={p6} alt="" />
                </div>
              </Carousel>
            </BannerSection>
          </BannerContainer>
        </Container>
      </>
    </>
  );
}

export default Amazon;
