import styled from "styled-components";
import bg from "../../assets/main.jpg";

export const ProjectHeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background: url(${bg}) center no-repeat;
  background-size: cover;

  animation: animColor 5s linear infinite;

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
    transition: text-shadow 0.5s ease-in-out;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
    @media only screen and (max-width: 700px) {
      font-size: 4rem;
      padding-left: 23px;
    }
    &:hover {
      text-shadow: 0 2px 2px #ff0000, -2px 5px 0 #ff7f00, -4px 10px 0 #ffff00,
        -8px 15px 0 #00ff00, -12px 20px 0 #0000ff, -16px 25px 0 #4b0082,
        -20px 30px 0 #9400d3;
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
