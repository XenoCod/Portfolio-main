import styled from "styled-components";

export const BannerContainer = styled.div`
  height: 50vh;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
  z-index: 1000;
  @media only screen and (max-width: 700px) {
    margin-bottom: 0;
    padding-bottom: 0;
    width: 70vw;
    height: 70vh;
  }
`;
export const BannerSection = styled.div`
  width: 50vw;

  height: 50vh;
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 70vh;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
