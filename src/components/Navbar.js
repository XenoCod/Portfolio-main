import React from "react";
import {
  NavbarSection,
  NavbarContainer,
} from "../styles/components/NavbarStyles";
import Hamburger from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div>
      <NavbarContainer>
        <NavbarSection>
          <div className="about" onClick={() => history.push("/about")}>
            ABOUT ME
          </div>
          <div className="menu">
            <Hamburger
              style={{ color: "01F7B6", fontSize: "40px" }}
              onClick={() => history.push("/menu")}
            />
          </div>
        </NavbarSection>
      </NavbarContainer>
    </div>
  );
}

export default Navbar;
