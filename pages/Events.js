import React from 'react';
import { Link } from 'react-router-dom'
// styling
import styled from 'styled-components'
// animation
import {motion} from 'framer-motion'

// import all of the image or media files ----here---
import group1 from '../images/IMG_0264.JPG'
import group2 from '../images/IMG_0266.JPG'
import laces from '../images/IMG_0088.JPG'
import hour from '../images/IMG_0002.JPG'
import muddy from '../images/IMG_0097.JPG'
import agm from '../images/IMG_5087.jpg'



const Events = () => {
    return (
        <StyledEvents>
            <StyledEvent>
                <h2>WVSCR - WyeVelo Sunday Club Run</h2>
                <div className="line"></div>
                <Link to="events/wvscr">
                    <img src={group1} alt="wvscr"/>
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>AGM</h2>
                <div className="line"></div>
                <Link to="events/agm">
                    <img src={agm} alt="agm"/>
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>Hill Climb</h2>
                <div className="line"></div>
                <Link to="events/hill-climb">
                    <img src={laces} alt="hill"/>
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>The Hour Record</h2>
                <div className="line"></div>
                <Link to="/events/hour-record">
                    <img src={hour} alt="60"/>
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
                <h2>MTB</h2>
                <div className="line"></div>
                <Link to="/events/mtb">
                    <img src={muddy} alt="60"/>
                </Link>
            </StyledEvent>
        </StyledEvents>

    )
}

const StyledEvents = styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2 {
    padding 1rem 0rem;
    color: #FECEF6;
    &:hover{
        cursor: pointer;
    }
}
`
const StyledEvent = styled.div`
padding-bottom: 10rem;
.line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: contain;
}
`
export default Events