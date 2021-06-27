import styled from "styled-components";

export const SkillsContainer = styled.div`
  /* height: 100vh; */
  width: 100vw;
  background: #0e0e0e;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  span,
  li {
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
`;

export const SkillsSection = styled.div`
  color: white;

  /* border: 2px solid white; */
  /* height: 70vh; */

  width: 70vw;
  margin-top: 100px;
  margin-bottom: 100px;
  @media only screen and (max-width: 700px) {
    height: fit-content;
  }

  > .main {
    display: flex;
    justify-content: space-between;
    /* border: 2px solid orange; */
    width: 70vw;
    align-items: center;

    @media only screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  }

  > .main > .skills > .skills-coloum {
    width: fit-content;
    height: fit-content;
  }

  > .main > .skills > .skills-coloum > .skill-title > .line {
    width: 50px;
    height: 1px;
    background: #01f7b6;
    display: inline-block;
    margin: 5px 15px;
  }

  > .main > .skills > .skills-coloum > .skill-title {
    font-family: "Fjalla One", sans-serif;
    font-size: 17px;
    line-height: 20px;
    font-weight: 500;

    @media only screen and (max-width: 700px) {
      margin-top: 50px;
    }
  }

  > .main > .skills > .skills-coloum > .skill-title > .num {
    color: #01f7b6;
  }

  > .skills-title {
    font-family: Poppins, sans-serif;
    font-size: 60px;
    font-weight: 800;
    line-height: 72px;
    /* border: 2px solid white; */
    width: 45vw;
    height: fit-content;
    margin-bottom: 50px;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 33px;
      width: 50vw;
    }
  }

  > .main > .skills > .skills-coloum {
    /* border: 2px solid pink; */
  }

  > .main > .skills > .skills-coloum > .skill-list {
    /* border: 1px solid red; */
    margin-left: 118px;
    width: fit-content;
    margin-top: 40px;
  }

  > .main > .skills > .skills-coloum > .skill-list > ul > li {
    font-family: Poppins, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 31px;
  }
`;
