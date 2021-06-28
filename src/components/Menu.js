import React from "react";
import { MenuContainer, MenuSection } from "../styles/components/MenuStyles";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Menu() {
  return (
    <div>
      <Navbar />
      <MenuContainer data-aos="zoom-out">
        <MenuSection>
          <div className="menu">
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              <span>HOME</span>
            </Link>
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span>PROJECTS</span>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
              <span>ABOUT</span>
            </Link>
          </div>
          <div className="info">LET'S CREATE USEFUL A WEBSITE FOR YOU!</div>
        </MenuSection>
      </MenuContainer>
    </div>
  );
}

export default Menu;
