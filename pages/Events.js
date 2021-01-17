import React from 'react';
import { Link } from 'react-router-dom';
// styling
import styled from 'styled-components';
// animation
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';

// import all of the image or media files ----here---
import group1 from '../images/IMG_0264.JPG';
// import group2 from '../images/IMG_0266.JPG';
import laces from '../images/IMG_0088.JPG';
import hour from '../images/IMG_0002.JPG';
import muddy from '../images/IMG_0097.JPG';
import agm from '../images/IMG_5087.jpg';

const Events = () => {
  return (
    <StyledEvents
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <StyledEvent>
        <motion.h2 variants={fade}>WVSCR - WyeVelo Sunday Club Run</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/wvscr" >
          <StyledHide>
            <motion.img variants={photoAnim} src={group1} alt="wvscr" />
          </StyledHide>
        </Link>
      </StyledEvent>
      <StyledEvent>
        <motion.h2 variants={fade}>AGM</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/agm" >
          <StyledHide>
            <motion.img variants={photoAnim} src={agm} alt="agm" />
          </StyledHide>
        </Link>
      </StyledEvent>
      <StyledEvent>
        <motion.h2 variants={fade}>Hill Climb</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/hill-climb" >
          <StyledHide>
            <motion.img variants={photoAnim} src={laces} alt="hill" />
          </StyledHide>
        </Link>
      </StyledEvent>
      <StyledEvent>
        <motion.h2 variants={fade}>60mins & DL1</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/hour-record">
          <StyledHide>
            <motion.img variants={photoAnim} src={hour} alt="60" />
          </StyledHide>
        </Link>
      </StyledEvent>
      {/* <StyledEvent>
                <h2>A-Team Loop</h2>
                <div className="line"></div>
                <Link to="/events/a-loop">
                    <img src={hour} alt="60"/>
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>B-Team Loop</h2>
                <div className="line"></div>
                <Link to="/events/b-loop">
                    <img src={hour} alt="60"/>
                </Link>
            </StyledEvent> */}
      <StyledEvent>
        <motion.h2 variants={fade}>MTB</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/mtb">
          <StyledHide>
            <motion.img variants={photoAnim} src={muddy} alt="60" />
          </StyledHide>
        </Link>
      </StyledEvent>
    </StyledEvents>
  );
};

const StyledEvents = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
@media (max-width: 1300px) {
  padding: 2rem 2rem;
}
h2 {
    padding 1rem 0rem;
    color: #FECEF6;
    &:hover{
        cursor: pointer;
    }
}
`;
const StyledEvent = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;

export default Events;
