import styled from "styled-components";
import bg from "../../assets/demo1.jpg";

export const AboutMeContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  position: relative;
`;
export const AboutMeHeader = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg}) center no-repeat;
  background-size: cover;
  /* position: absolute; */
  /* position: relative; */
  animation: animColor 15s linear infinite;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: animColor;

  @keyframes animColor {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  > .title {
    font-size: 150px;
    line-height: 160px;
    font-weight: 700;
    font-family: Poppins, sans-serif;
    width: 30vw;

    color: transparent;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20%;
    text-align: center;
    /* left: 10%; */
    left: 0;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    bottom: 0;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    @media only screen and (max-width: 700px) {
      font-size: 4rem;
      line-height: 60px;
      top: 40%;
      width: 90vw;
      width: 50vw;
    }
  }

  .white {
    color: white;
  }

  > .info {
    font-size: 20px;
    font-weight: 500;
    font-family: "Fjalla One", sans-serif;
    font-family: Poppins, sans-serif;
    line-height: 19px;
    color: white;
    padding-left: 40px;

    padding-top: 170px;
  }
`;

export const AboutMeSection = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  z-index: 10;
  position: relative;

  > .intro {
    height: 80vh;
    width: 70vw;
    /* border: 1px solid red; */
    /* position: relative; */
    padding-top: 4%;
    padding-left: 1%;
  }

  > .intro > .desc {
    font-family: "Fjalla One", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    /* position: relative; */
    padding-bottom: 10px;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  > .intro > .my-info {
    color: black;
    font-family: Poppins, sans-serif;
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
    padding-top: 20px;
  }

  > .intro > .main-title {
    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 800;
    width: 42vw;
    position: relative;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 30px;
      width: 70vw;
    }

    ::before {
      content: "About";

      font-weight: 800;

      position: absolute;
      top: 40%;

      left: 0;

      /* bottom: 10px; */
      right: 0;
      margin-left: auto;
      margin-right: auto;
      z-index: 100;
      letter-spacing: 5px;
      font-size: 20vw;
      opacity: 0.05;
      color: black;

      @media only screen and (max-width: 700px) {
        font-size: 19vw;
        opacity: 0.05;
        z-index: -100;
        letter-spacing: 4px;
        font-weight: 800;
      }
    }
  }
`;
