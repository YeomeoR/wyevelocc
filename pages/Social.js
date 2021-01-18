import React from 'react';
import { Link } from 'react-router-dom';
//components
import Footer from '../components/footer'
// styling
import styled from 'styled-components';
// animation
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';

// import all of the image or media files ----here---
import alps1 from '../images/IMG_0162[7553].JPG'
// import alps2 from '../images/IMG_6884[7589].jpg'
// import alps3 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (4).jpg'
// import alps4 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (3).jpg'
import sportive1 from '../images/IMG_0165.JPG'
// import sportive2 from '../images/PHOTO-2021-01-17-16-21-54 - Copy (2).jpg'
// import sportive3 from '../images/IMG_0308.JPG'
// import sportive4 from '../images/IMG_0271[7579].jpg'
import littlemissbirthday from '../images/LittleMissBirthday.jpg'
const Social = () => {
  return (
    <StyledEvents
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <StyledEvent>
        <motion.h2 variants={fade}>The Alps And Other Mountains</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/social/alps" >
          <StyledHide>
            <motion.img variants={photoAnim} src={alps1} alt="alps1" />
          </StyledHide>
        </Link>
      </StyledEvent>
      <StyledEvent>
        <motion.h2 variants={fade}>Races and Sportives</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/social/races" >
          <StyledHide>
            <motion.img variants={photoAnim} src={sportive1} alt="sportive1" />
          </StyledHide>
        </Link>
      </StyledEvent>
      <StyledEvent>
        <motion.h2 variants={fade}>Upcoming....</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/social/upcoming" >
          <StyledHide>
            <motion.img variants={photoAnim} src={littlemissbirthday} alt="alps3" />
          </StyledHide>
        </Link>
      </StyledEvent>
      {/* <StyledEvent>
        <motion.h2 variants={fade}>60mins & DL1</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/hour-record">
          <StyledHide>
            <motion.img variants={photoAnim} src={hour} alt="60" />
          </StyledHide>
        </Link>
      </StyledEvent> */}
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
      {/* <StyledEvent>
        <motion.h2 variants={fade}>MTB</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/events/mtb">
          <StyledHide>
            <motion.img variants={photoAnim} src={muddy} alt="60" />
          </StyledHide>
        </Link>
      </StyledEvent> */}
      <Footer />
    </StyledEvents>
  );
};

const StyledEvents = styled(motion.div)`
min-height: 90vh;
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
    height: 65vh;
    object-fit: contain;
  }
`;
const StyledHide = styled.div`
  overflow: hidden;
`;
export default Social;
