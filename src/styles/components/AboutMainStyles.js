import styled from "styled-components";
import bg from "../../assets/demo1.jpg";

export const AboutMeContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  position: relative;
  height: fit-content;
`;
export const AboutMeHeader = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg}) center no-repeat;
  background-size: cover;

  animation: animColor 15s linear infinite;

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
    transition: text-shadow 0.5s ease-in-out;
    &:hover {
      text-shadow: 0 2px 2px #ff0000, -2px 5px 0 #ff7f00, -4px 10px 0 #ffff00,
        -8px 15px 0 #00ff00, -12px 20px 0 #0000ff, -16px 25px 0 #4b0082,
        -20px 30px 0 #9400d3;
    }
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
  height: fit-content;
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
    /* height: 80vh; */
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
    padding-top: 50px;
    padding-bottom: 50px;
    width: 50vw;
    margin: auto;
    @media only screen and (max-width: 700px) {
      margin: 0;
      font-size: 0.9rem;
      line-height: 25px;
      width: 70vw;
      margin: auto;
    }
    span {
      position: relative;
      &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 5px;
        display: block;
        right: 0;
        background: #01f7b6;
        /* margin-top: 1px; */
        transition: 0.4s ease;
      }

      &:hover {
        &:after {
          width: 100%;
          left: 0;
          background: $black;
        }
      }
    }
  }

  > .intro > .main-title {
    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 800;
    width: 35vw;
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
