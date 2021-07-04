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
import p1 from "../assets/Project1/p1.png";
import p2 from "../assets/Project1/p2.png";
import p3 from "../assets/Project1/p3.png";
import p4 from "../assets/Project1/p4.png";
import p5 from "../assets/Project1/p5.png";
import p6 from "../assets/Project1/p6.png";
import p7 from "../assets/Project1/p7.png";
import p8 from "../assets/Project1/p8.png";
import p9 from "../assets/Project1/p9.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BannerContainer, BannerSection } from "../styles/components/Banner";

function Netflix() {
  return (
    <>
      <Supper>
        <HeaderImg src={p9} />
      </Supper>
      <Container data-aos="fade-up">
        <Title>Netflix Clone</Title>
        <Inner>
          <Mini>Streaming platform</Mini>
          <Desc>
            <Mini>DESC</Mini>A Netflix clone made with React & Redux as a
            template to maintain the Login/ Logout state of the user. Firebase
            on the backend for User Authentication and Firestore as Database.
            Hosted on Firebase Hosting
          </Desc>
        </Inner>

        <Inline>
          <Mini>Tools used</Mini>
          <Desc>React, React Router, Material UI, Redux, Firebase</Desc>

          <Mini>Visit</Mini>
          <Desc>
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open("https://netflix-clone-71028.web.app/", "_blank")
              }
            >
              Project
            </span>{" "}
            <br />{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://github.com/XenoCod/Netflix-clone",
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
              <div>
                <img src={p7} alt="" />
              </div>
              <div>
                <img src={p8} alt="" />
              </div>
              <div>
                <img src={p9} alt="" />
              </div>
            </Carousel>
          </BannerSection>
        </BannerContainer>
      </Container>
    </>
  );
}

export default Netflix;
