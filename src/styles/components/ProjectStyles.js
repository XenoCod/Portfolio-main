import styled from "styled-components";

export const ProjectContainer = styled.div`
  height: 350vh;

  width: 100vw;
  position: relative;

  @media only screen and (max-width: 700px) {
    height: 170vh;
  }
  .button-container {
    margin-top: 20px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 1%;
    /* margin-left: auto; */
    /* margin-right: auto; */
    /* top: 0; */
    left: 45%;
    margin: auto;
    @media only screen and (max-width: 700px) {
      bottom: 1%;
      /* left: 30%; */

      margin: auto;
    }

    /* text-align: center; */
  }
  .button-container > .btn {
    padding: 12px 30px;
    border: 0;
    border: 2px solid #333;
    border-radius: 20px;

    color: #333;
    outline: 0;
    transition: 0.2s;
    @media only screen and (max-width: 700px) {
      padding: 5px 10px;
    }
  }

  .button-container > .btn-shadow {
    background: #000;
    color: #fff;
    font-size: 20px;
    font-family: Poppins, sans-serif;
    @media only screen and (max-width: 700px) {
      font-size: 10px;
    }
  }

  .button-container > .btn-shadow:hover {
    box-shadow: 0 4px 8px #02efb0;
  }

  > .project-title {
    width: 50vw;

    font-family: Poppins, sans-serif;
    font-size: 60px;
    line-height: 72px;
    font-weight: 800;
    position: absolute;
    top: 140px;
    left: 19%;
    transition: all 0.4s;
    :hover {
      text-decoration: underline;
      color: #01f7b6;
    }
    @media only screen and (max-width: 700px) {
      font-size: 2rem;
      line-height: 30px;
      position: absolute;
      top: 40px;
      width: 80vw;
      left: 30px;
    }
  }
`;

export const ProjectSection = styled.div`
  width: 100%;
  /* height: 100vh; */
 
  position: relative;
  cursor: pointer;
 
 

  
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
    right: 0;
  }

  > .projects {
    width:70vw;
    height: 300vh;
    position: absolute;
    top: 40%;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-self:center;
    margin-top: 350px;
    
    @media only screen and (max-width: 700px){
      position: absolute;
      top:5%;
      width:100vw;
      margin: 0px;
      justify-content:space-between;
      margin-top: 70px;
      
      height: 100%;
    }

   
    
  }

  > .projects > .projects-summary > .projects-title {
    font-family: Poppins, sans-serif;
    font-weight: 800;
    font-size: 128px;
    color: #01f7b6;
    /* line-height: 128px; */
    display: flex;
    flex-direction: column;
    position: relative;
    width:40vw;
    z-index:100;
    padding-left: 20px;

    @media only screen and (max-width: 700px){
      font-size: 2rem;
      line-height: 50px;
    }

    .btn-fill:hover{
            color: #fff;
            box-shadow: 0 0 50px #333 inset, 0 0 10px #333;
        }

        .btn-shadow{
            background: #333;
            color: #fff;

        }

    
    

    > img {
    
      height: 50vh;
      width: 50vw;
      object-fit: contain;
      position:absolute;
      left:60%;
      z-index:-1;
      cursor: pointer;
      transition: transform .2s ease-in-out;

      :hover{
        transform: scale(0.93);
      }

      
    @media only screen and (max-width: 700px){
      height: 20vh;
      width: 70vw;
      
      
     
    }
     
    }
  }
  
  > .projects > .projects-summary {

    display:flex;
    width:50vw;
    
    @media only screen and (max-width: 700px){
      margin-bottom: 100px;
      margin-top: 60px;
      width: 100vw;
      
    }
    

   
    
  }

  > .projects > .projects-summary > .projects-title > .sub-topic {
    font-family: Poppins, sans-serif;
    font-weight: 800;
    font-size: 80px;
    color: #0e0e0e;
    line-height: 80px;
    
    @media only screen and (max-width: 700px){
      font-size: 1rem;
      line-height: 36px;
    }
  }

  
    
  
`;
