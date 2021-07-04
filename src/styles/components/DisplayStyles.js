import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  width: 70vw;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: auto;
  flex-direction: column;
  padding-top: 5%;
  span {
    position: relative;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 5px;
      display: block;
      right: 0;
      background: #01f7b6;
      margin-top: 1px;
      transition: 0.4s ease;
    }

    &:hover {
      &:after {
        width: 100%;
        left: 0;
        background: $black;
      }
    }

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    width: 90vw;
  }
`;

export const Title = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 60px;
  font-weight: 800;
  color: #0e0e0e;
  line-height: 72px;
  @media only screen and (max-width: 700px) {
    font-size: 3rem;
  }
`;

export const Mini = styled.div`
  font-family: "Fjalla One", sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #0e0e0e;
  line-height: 40px;
`;

export const Desc = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 20px;
  line-height: 37px;
  color: #0e0e0e;
  line-height: 37px;
  font-weight: 400;
  width: 40vw;
  @media only screen and (max-width: 700px) {
    width: 80vw;
    font-size: 0.8rem;
    line-height: 20px;
  }
`;

export const Supper = styled.div`
  width: 100vw;
  height: 60vh;
  position: relative;
  opacity: 0.95;
`;

export const Inner = styled.div`
  justify-content: space-between;
  width: 100%;
  /* height: inherit; */
  padding-top: 40px;
  display: flex;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Inline = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;
