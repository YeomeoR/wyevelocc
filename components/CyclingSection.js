import React from 'react';
//icons and images
import mtb from '../images/iconmonstr-bicycle-1.svg';
import road from '../images/iconmonstr-bicycle-4.svg';
import map from '../images/iconmonstr-navigation-11.svg';
import groups from '../images/iconmonstr-user-30.svg';
import downs from '../images/Kent Downs (2).jpg';

// styling
import styled from 'styled-components';
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';
//animation
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation';
import { useScroll } from '../components/useScroll';

const CyclingSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledCycling variants={fade} animate={controls} initial='hidden' ref={element}>
      <StyledDescription>
        <motion.h2 variant={fade}>
          <span>Cycling</span> in Kent
        </motion.h2>
        <StyledCards>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={road} alt="road" />
              <motion.h3>Road</motion.h3>
            </motion.div>
            <p>this should be a tag or revealing card like faq</p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={mtb} alt="mtb" />
              <motion.h3>MTB</motion.h3>
            </motion.div>
            <p>this should be a tag or revealing card like faq</p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={map} alt="routes" />
              <motion.h3>Routes</motion.h3>
            </motion.div>
            <p>this should be a tag or revealing card like faq</p>
          </StyledCard>
          <StyledCard>
            <motion.div className="icon">
              <motion.img variants={photoAnim} src={groups} alt="groups" />
              <h3>Groups</h3>
            </motion.div>
            <p>this should be a tag or revealing card like faq</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={downs} alt="the downs" />
      </StyledImage>
    </StyledCycling>
  );
};

//styled
const StyledCard = styled(motion.div)`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #FECEF6;
      color: black;
      text-shadow: 0 1px 1px;
      padding: 1rem;
    }
`;
const StyledCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (max-width: 1300px) {
    justify-content: center;
}

`;

const StyledCycling = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
    text-shadow: 0 1px 2px;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    text-shadow: 0 1px 1px;
  }
`;
export default CyclingSection;
