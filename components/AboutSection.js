import React from 'react';
import galibier from '../images/Galibier-WV-2018 (2).png';
import WVLogo from '../images/WyeVeloLogo.png';
//styles
// import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledMainIcon,
  StyledHide,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <StyledMainIcon>
          <img className="mainIcon" src={WVLogo} alt="WV" />
        </StyledMainIcon>
        <StyledHide>
          <button>Contact Us</button>
        </StyledHide>
      </StyledDescription>

      <StyledImage>
        <img src={galibier} alt="mountain" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
