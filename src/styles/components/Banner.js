import styled from "styled-components";

export const BannerContainer = styled.div`
  /* height: 50vh; */
  margin-bottom: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
  z-index: 1000;
  /* margin-bottom: 90px; */
  @media only screen and (max-width: 700px) {
    width: 100vw;
    margin-right: 0;
    transform: translateX(-15%);

    /* height: 80vh; */
  }
`;
export const BannerSection = styled.div`
  width: 70vw;

  /* height: 50vh; */
  @media only screen and (max-width: 700px) {
    width: 100vw;
    /* height: -90vh; */
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
