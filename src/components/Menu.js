import React from "react";
import { MenuContainer, MenuSection } from "../styles/components/MenuStyles";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

function Menu() {
  const history = useHistory();
  return (
    <div>
      <Navbar />
      <MenuContainer>
        <MenuSection>
          <div className="menu">
            <span onClick={() => history.push("/")}>HOME</span>
            <span onClick={() => history.push("/projects")}>PROJECTS</span>{" "}
            <span onClick={() => history.push("/about")}>ABOUT</span>
          </div>
          <div className="info">LET'S CREATE USEFUL A WEBSITE FOR YOU!</div>
        </MenuSection>
      </MenuContainer>
    </div>
  );
}

export default Menu;
