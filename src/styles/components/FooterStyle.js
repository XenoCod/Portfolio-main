import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0e0e0e;
  width: 100vw;
  height: 90vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    height: 70vh;
  }
  a,
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
`;

export const FooterSection = styled.div`
  height: 100%;
  width: 70vw;
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  > .title {
    font-family: Poppins, sans-serif;
    line-height: 58px;
    font-weight: 800;
    font-size: 48px;
    color: #01f7b6;
    width: 45vw;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 40px;
      width: 85vw;
    }
  }
  > .address {
    display: flex;
    justify-content: space-between;
    color: white;
    font-family: Poppins, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
    }
  }

  > .social > .social-title {
    font-family: "Fjalla One", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #01f7b6;
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
    }
  }
  > .social > .social-links {
    display: flex;
    width: 10vw;

    justify-content: space-between;
    padding-top: 10px;
    cursor: pointer;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  > .social > .social-links > .LinkedIn > a {
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: white;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  > .social > .social-links > .github > a {
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: white;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
    }
  }

  > .social > .social-links > .LinkedIn {
    @media only screen and (max-width: 700px) {
      margin-right: 20px;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02efb0;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  @media only screen and (max-width: 700px) {
    font-size: 0.6rem;
  }
`;
