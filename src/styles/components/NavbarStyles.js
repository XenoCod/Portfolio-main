import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  /* background-color: black; */
  height: 7%;
  width: 100vw;
  z-index: 100;
`;
export const NavbarSection = styled.div`
  color: white;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  cursor: pointer;

  .about {
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
`;
