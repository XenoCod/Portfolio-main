import styled from "styled-components";

export const HireMeContainer = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  /* align-self: center; */
  /* justify-content: center; */
  background-color: #02efb0;
  position: relative;
  @media only screen and (max-width: 700px) {
    height: 60vh;
  }
`;

export const HireMeSection = styled.div`
  height: 100%;
  width: 60vw;
  /* border: 2px solid black; */
  position: absolute;
  bottom: 0;
  /* margin-left: auto; */
  margin-right: auto;
  left: 15%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  > .intro {
    font-family: "Fjalla One", sans-serif;
    font-size: 14px;
    line-height: 14px;
    color: #0e0e0e;
    font-weight: 500;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  > .title {
    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 800;
    color: black;
    width: 45vw;
    /* border: 2px solid red; */
    z-index: 100;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 30px;
      width: 86vw;
    }
  }

  > .desc {
    font-family: "Fjalla One", sans-serif;
    font-size: 25px;
    line-height: 40px;
    font-weight: 500;
    color: #0e0e0e;
    /* border: 2px solid pink; */
    width: 20vw;
    z-index: 100;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
      line-height: 20px;
      width: 60vw;
    }
  }

  .start {
    font-family: Poppins, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    color: #0e0e0e;
    cursor: pointer;
    z-index: 1000;
  }

  > .start > .line {
    width: 50px;
    height: 1px;
    background: #0e0e0e;
    display: inline-block;
    margin: 5px 15px;
  }

  &::after {
    content: "hire me";
    opacity: 0.05;
    position: absolute;
    font-weight: 800;
    z-index: 1;
    letter-spacing: 5px;
    font-size: 18vw;
    opacity: 0.08;
    top: 4%;
    transform: translateX(6%);
    transform: translateY(-10%);

    color: black;
    width: 10vw;
    height: fit-content;
    left: 0;
    @media only screen and (max-width: 700px) {
      font-size: 40vw;
    }
  }
`;
