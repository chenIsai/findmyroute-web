import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledNav = styled.nav`
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;

background: #89878a;
color: white;

height: 15vh;

.name {
  color: white;
  align: left;
  font-size: 5vh;
  text-decoration: none;
}

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;

  width: 35vw;
  text-align: center;
}

.link {
  color: white;
  font-size: 3.5vh;
  text-decoration: none;
}
`

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/" className="name">FindMyRoute</Link>
      <ul className="nav-links">
        <li>
          <Link to="/privacy-policy" className="link">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-of-service" className="link">Terms Of Service</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Navbar;
