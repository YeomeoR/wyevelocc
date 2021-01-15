import React from 'react';
import { Link } from 'react-router-dom'
// styling
import styled from 'styled-components'
// animation
import {motion} from 'framer-motion'

// import all of the image or media files ----here---



const Events = () => {
    return (
        <StyledEvents>
            <StyledEvent>
                <h2>WVSCR - WyeVelo Sunday Club Run</h2>
                <div className="line"></div>
                <Link to="events/hill-climb">
                    {/* <img src={wvscr} alt="wvscr"/> */}
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>AGM</h2>
                <div className="line"></div>
                <Link to="events/agm">
                    {/* <img src={agm} alt="agm"/> */}
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>Hill Climb</h2>
                <div className="line"></div>
                <Link to="events/hill-climb">
                    {/* <img src={hill} alt="hill"/> */}
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>The Hour Record</h2>
                <div className="line"></div>
                <Link to="/events/hour-record">
                    {/* <img src={hour} alt="60"/> */}
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>A-Team Loop</h2>
                <div className="line"></div>
                <Link to="/events/hour-record">
                    {/* <img src={hour} alt="60"/> */}
                </Link>
            </StyledEvent>
            <StyledEvent>
                <h2>B-Team Loop</h2>
                <div className="line"></div>
                <Link to="/events/hour-record">
                    {/* <img src={hour} alt="60"/> */}
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
    object-fit: cover;
}
`
export default Events