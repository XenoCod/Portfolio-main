import styled from "styled-components";
import bg from "../../assets/demo2.jpg";

export const ProjectHeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: url(${bg}) center no-repeat;
  background-size: cover;
  /* position: absolute; */
  /* position: relative; */
  animation: animColor 5s linear infinite;
  /* animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: animColor; */

  @keyframes animColor {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const ProjectHeaderSection = styled.div`
  height: 80%;
  width: 65vw;
  /* position: absolute; */
  position: relative;

  > .title {
    font-size: 150px;
    line-height: 160px;
    font-weight: 700;
    font-family: Poppins, sans-serif;

    color: transparent;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    text-align: center;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    right: 0;
    bottom: 0;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    @media only screen and (max-width: 700px) {
      font-size: 4rem;
      padding-left: 23px;
    }
    font-variation-settings: "wght" 900, "ital" 1;

    transition: all 0.5s;
    &:hover {
      font-variation-settings: "wght" 100, "ital" 0;
      text-shadow: none;
      text-shadow: 10px 10px 0px #07bccc, 15px 15px 0px #e601c0,
        20px 20px 0px #e9019a, 25px 25px 0px #f40468, 45px 45px 10px #482896;
      -webkit-text-stroke-width: 0;
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
