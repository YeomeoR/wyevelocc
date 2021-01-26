import React from 'react';

import styled from 'styled-components';
import reactivity from '../images/reactivity logo.png';
//send email
import SendEmail2 from '../components/SendEmail2'

const Footer = () => {
  return (
    <StyledFooter>
      <img src={reactivity} alt="company logo" onClick={SendEmail2} />
      <h6>Web Design by Reactivity</h6>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 10;
  max-height: 5vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #263771 0%, #fecef6 120%);
  img {
      position: relative;
      left: 85%;
      height: 10vh;
      cursor: pointer;
  }
  h6 {
    position: relative;
    font-size: 0.8rem;
    right: 80%;
    padding: 1rem 1rem;
    margin: 5px;
    justify-content: space around;
  }


  
`;

export default Footer;
