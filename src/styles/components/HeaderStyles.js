import styled from "styled-components";

import bg from "../../assets/demo2.jpg";

export const HeaderContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: relative;
  /* background: url(${bg}) center no-repeat; */
  /* background-size: cover; */
  display: flex;
  /* object-fit: contain; */
  justify-content: center;
  align-items: center;
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

export const HeaderImg = styled.img`
  width: inherit;
  height: inherit;
  position: absolute;
  object-fit: cover;
`;

export const HeaderSection = styled.div`
  height: 80%;
  width: 75vw;

  display: flex;
  align-items: flex-start;

  flex-direction: column;
  .resume {
    margin-top: 20px;
    z-index: 1000;
  }

  .resume > button {
    background-color: transparent;

    padding: 12px 30px;
    outline: none;
    border: none;
    border-radius: 50px;

    font-family: Poppins, sans-serif;
    color: #fff;
    font-size: 20px;
    transition: all 0.2s ease-in-out;
    font-weight: 700;

    &:hover {
      box-shadow: 0 4px 8px #02efb0;
    }
    @media only screen and (max-width: 700px) {
      padding: 5px 10px;
      padding: 5px;
      font-size: 10px;
      margin-top: 10%;
    }
  }

  @media only screen and (max-width: 700px) {
    height: 70%;
  }

  > .title {
    font-size: 150px;
    line-height: 160px;
    font-weight: 700;
    font-family: Poppins, sans-serif;

    color: transparent;
    display: flex;
    flex-direction: column;
    position: relative;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: whitesmoke;
    transition: text-shadow 0.5s ease-in-out;

    @media only screen and (max-width: 700px) {
      font-size: 3rem;
      line-height: 5rem;
    }
    &:hover {
      text-shadow: 0 2px 2px #ff0000, -2px 5px 0 #ff7f00, -4px 10px 0 #ffff00,
        -8px 15px 0 #00ff00, -12px 20px 0 #0000ff, -16px 25px 0 #4b0082,
        -20px 30px 0 #9400d3;
    }
  }

  .white {
    color: white;
    /* &:hover {
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: whitesmoke;
      color: transparent;
      
    } */
  }
  .title > .intro {
    @media only screen and (max-width: 700px) {
      font-size: 3rem;
    }
    > .last {
      display: flex;
      flex-direction: column;
      /* &:hover {
        color: white;
      } */
    }
  }

  > .title > .info {
    font-size: 25px;
    font-weight: 300;
    font-family: "Fjalla One", sans-serif;
    font-family: Poppins, sans-serif;
    line-height: 20px;
    padding-top: 20px;
    /* color: #00a891; */
    /* color: white; */
    /* padding-left: 40px; */
    letter-spacing: 3px;
    @media only screen and (max-width: 700px) {
      font-size: 1rem;
      padding: 10px;
    }

    /* padding-top: 170px; */
  }
`;

export const Sidebar = styled.div`
position: absolute;
left: 0;

text-align: left;
height: 100vh;
width: 5vw;

display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
@media only screen and (max-width: 700px) {
     padding-left: 10px;
    }


> .socials {
  cursor: pointer;
}

> .scroll-down > .title {
  width: 98px;
  display: inline-block;
  transform: rotate(-90deg);
  margin-bottom: 50px;
  color: white;
  font-family: "Fjalla One", sans-serif;
  font-size: 17px;
  font-weight: 400;
 
}

>.scroll-down>.after{
  ::before{

position: absolute;
 
  bottom:8%;
  left: 50%;
  margin-left: -0.5px;
  width: 1px;
  height: 70px;
  background: white;
  content: "";
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(1, 0, 0, 1);
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: elasticus;
}
  }

  @keyframes elasticus{
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
  }
  50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
  }
  50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
  }
  100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
  }

  }
}
`;
