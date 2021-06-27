import React from "react";
import {
  NavbarSection,
  NavbarContainer,
} from "../styles/components/NavbarStyles";
import Hamburger from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavbarContainer>
        <NavbarSection>
          <div className="about">
            <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
              ABOUT ME
            </Link>
          </div>

          <Link to="/menu">
            <div className="menu">
              <Hamburger style={{ color: "01F7B6", fontSize: "40px" }} />
            </div>
          </Link>
        </NavbarSection>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
