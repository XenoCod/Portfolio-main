import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 70vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  @media only screen and (max-width: 700px) {
    height: fit-content;
    padding-bottom: 70px;
  }
`;

export const AboutSection = styled.div`
  /* height: fit-content; */
  /* border: 1px solid black; */
  height: 100%;
  width: 70vw;
  position: relative;

  > .about {
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 80px;

    @media only screen and (max-width: 700px) {
      display: flex;

      padding: 0px;
    }
  }

  > .about > .about-title {
    font-weight: 900;
    font-size: 60px;
    line-height: 72px;
    font-family: Poppins, sans-serif;

    @media only screen and (max-width: 700px) {
      font-size: 2.2rem;
    }
  }

  > .about > .about-info {
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
    color: #0e0e0e;
    @media only screen and (max-width: 700px) {
      padding: 0px;
    }
  }

  .about-info > .about-info-left {
    font-size: 25px;
    line-height: 40px;
    font-family: "Fjalla One", sans-serif;
    font-weight: 500;
    flex: 0.3;
    color: #0e0e0e;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  .about-info > .about-info-right {
    flex: 0.6;
    /* width: 60%; */
    /* height: 100%; */
    font-size: 20px;
    font-weight: 400;
    line-height: 37px;
    font-family: Poppins, sans-serif;
    color: #0e0e0e;
    @media only screen and (max-width: 700px) {
      font-size: 0.8rem;
      line-height: 24px;
    }
  }

  ::before {
    content: "Digital";

    font-weight: 800;

    position: absolute;
    top: 0;

    left: 0;

    /* bottom: 10px; */
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: -100;
    letter-spacing: 5px;
    font-size: 20vw;
    opacity: 0.05;

    @media only screen and (max-width: 400px) {
      font-size: 19vw;
      opacity: 0.05;
      z-index: -100;
      letter-spacing: 4px;
      font-weight: 800;
    }
  }
`;
