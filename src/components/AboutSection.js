import React from 'react';
import galibier from '../images/Galibier-WV-2018 (2).png';
import WVLogo from '../images/WyeVeloLogo.png';
// contact email
import SendEmail from '../components/SendEmail';
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
import { motion } from 'framer-motion';
import { fade, photoAnim, titleAnim } from '../animation';
import { useScroll } from '../components/useScroll';

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAbout
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <StyledMainIcon>
          <motion.img
            variants={photoAnim}
            className="mainIcon"
            src={WVLogo}
            alt="WV"
          />
        </StyledMainIcon>
        <motion.h3
          variants={titleAnim}
          style={{ color: '#FECEC6', fontSize: '1.4rem' }}
        >
          "The best rides are the ones where you{' '}
        </motion.h3>
        <motion.h3
          variants={titleAnim}
          style={{ color: '#FECEC6', fontSize: '1.4rem' }}
        >
          bite off more than you can chew,{' '}
        </motion.h3>
        <motion.h3
          variants={titleAnim}
          style={{ color: '#FECEC6', fontSize: '1.4rem' }}
        >
          and live through it"
          <span>
            <em>- Doug Bradbury</em>
          </span>
        </motion.h3>
        <StyledHide>
          <motion.button variants={fade} id="contact" onClick={SendEmail}>
            Contact Us
          </motion.button>
        </StyledHide>
      </StyledDescription>

      <StyledImage>
        <motion.img variants={photoAnim} src={galibier} alt="mountain" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
