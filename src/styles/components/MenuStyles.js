import styled from "styled-components";

export const MenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0e0e0e;
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
      margin-top: 5px;
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

  /* z-index: 2000; */
`;
export const MenuSection = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  right: 0;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid white; */
  height: 23vh;
  width: 80vw;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 700px) {
    top: 20%;
  }

  :hover {
    transition: transform 0.4s ease-in-out;
    transform: perspective(2000px) rotateX(0deg) rotateY(0deg);
  }

  > .menu {
    font-family: Poppins, sans-serif;
    font-size: 48px;
    font-weight: 800;
    display: flex;
    cursor: pointer;
    justify-content: space-evenly;
    @media only screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  }
  > .info {
    font-family: "Fjalla One", sans-serif;
    font-weight: 400;
    font-size: 32px;
    color: #01f7b6;
  }
`;
