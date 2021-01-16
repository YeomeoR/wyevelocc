import React from 'react';
// routing
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="clubName" to="/" >
          Wye Velo Cycling Club
        </Link>
        
      </h1>
      <ul>
        
        <li>
          <Link to="/about"  >
            About Us
          </Link>
        </li>
        <li>
          <Link to="/events" >
            Events
          </Link>
        </li>
        <li>
          <Link to="/social" >
            Social
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: linear-gradient(90deg, #263771 0%, #fecef6 120%);

  a {
    color: #263771;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #clubName {
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
    color: #fecef6;
    text-shadow: 1px 1px 2px;
  }
  li {

    padding-left: 10rem;
    position: relative;
    color: #263771;
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px;
    font-weight: bolder;
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    justify-content: center;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
`;

export default Nav;
