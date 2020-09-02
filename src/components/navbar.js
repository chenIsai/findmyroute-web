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

  height: 7em;
  min-height: 5em;

  .name {
    margin-left: 2em;
    color: white;
    align: left;
    font-size: 2.5em;
    text-decoration: none;
  }

  .nav-links {
    margin-left: auto;
    margin-right: 2em;
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
    font-size: 1.5em;
    text-decoration: none;
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/findmyroute-web" className="name">FindMyRoute</Link>
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
