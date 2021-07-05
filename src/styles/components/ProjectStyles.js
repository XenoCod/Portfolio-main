import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: fit-content;

  width: 100vw;
  position: relative;
  span {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 4px;
      display: block;
      right: 0;
      background: #01f7b6;
      /* margin-top: 2px; */
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

  @media only screen and (max-width: 700px) {
    height: fit-content;
  }

  > .project-title {
    width: 50vw;

    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 800;
    position: relative;
    top: 140px;
    left: 19%;
    transition: all 0.4s;
    margin-bottom: 100px;

    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 30px;
      position: absolute;
      top: 40px;
      width: 80vw;
      left: 30px;
    }
    ::after {
      position: absolute;
      content: "Projects";
      font-weight: 800;
      z-index: -100;
      letter-spacing: 5px;
      font-size: 20vw;
      opacity: 0.05;
      top: 0;
      left: -10%;
    }
  }
`;

export const ProjectSection = styled.div`
  width: 100%;
  /* height: 100vh; */

  position: relative;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    padding-top: 100px;
  }
`;

export const ProjectDiv = styled.div`
  /* height: fit-content; */
  width: 100vw;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0 auto;
  display: flex;
  cursor: pointer;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    width: 100vw;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const ProjectName = styled.div`
  height: fit-content;
  width: fit-content;
  font-family: Poppins, sans-serif;
  font-weight: 800;
  font-size: 128px;
  color: #01f7b6;
  cursor: pointer;
  /* line-height: 128px; */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 40vw;
  z-index: 1000;
  transform: translateX(20%);

  @media only screen and (max-width: 700px) {
    font-size: 2.5rem;
    /* line-height: 150px; */
    margin-top: -60px;
    height: fit-content;
  }
  .sub-topic {
    font-family: Poppins, sans-serif;
    font-weight: 800;
    font-size: 80px;
    color: #0e0e0e;
    line-height: 80px;
    width: fit-content;

    @media only screen and (max-width: 700px) {
      font-size: 1rem;
      line-height: 36px;
      width: 50vw;
    }
  }
`;

export const ProjectImgDiv = styled.div`
  height: 50vh;
  width: 50vw;

  @media only screen and (max-width: 700px) {
    height: 50vh;
    width: 100vw;
  }
`;
export const ProjectImg = styled.img`
  width: inherit;
  height: inherit;
  object-fit: contain;
  transition: all 450ms;
  &:hover {
    transform: scale(1.09);
  }
`;

export const Left = styled.div`
  transform: translateX(28%);
  z-index: 1000;
  @media only screen and (max-width: 700px) {
    transform: translateY(0%);
  }
`;

export const ProjectBtn = styled.button`
  width: fit-content;
  height: fit-content;
  color: #000;
  background: transparent;
  font-size: 20px;
  font-family: Poppins, sans-serif;
  border: none;
  margin-top: 50px;

  @media only screen and (max-width: 700px) {
    font-size: 0.7rem;
    margin-top: 0px;
  }
`;
