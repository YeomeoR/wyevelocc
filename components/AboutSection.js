import React from 'react';
import galibier from '../images/Galibier-WV-2018 (2).png';
import WVLogo from '../images/WyeVeloLogo.png';
// contact email
import SendEmail from '../components/SendEmail'
//styles
// import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledMainIcon,
  StyledHide,
} from '../styles';
//animation
import { motion } from 'framer-motion'
import { fade, photoAnim, titleAnim } from '../animation';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <StyledMainIcon>
          <motion.img variants={photoAnim}  className="mainIcon" src={WVLogo} alt="WV" />
        </StyledMainIcon>
        <motion.h2 variants={titleAnim} style={{ color: '#FECEC6', fontSize: '2.2rem'}}>Put the Fun between your legs!</motion.h2>
        <StyledHide>
          <motion.button variants={fade} id="contact" onClick={SendEmail}>Contact Us</motion.button>
        </StyledHide>
      </StyledDescription>

      <StyledImage>
        <motion.img variants={photoAnim} src={galibier} alt="mountain" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
