import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
// the data
import { SocialState } from '../components/SocialState';
// animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';

const SocialDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [events] = useState(SocialState);
  const [event, setEvent] = useState(null);

  // useEffect
  useEffect(() => {
    const currentEvent = events.filter((stateEvent) => stateEvent.url === url);
    setEvent(currentEvent[0]);
  }, [events, url]);

  return (
    <>
      {event && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ScrollTop />
          <StyledHeadline>
            <h2>{event.title}</h2>
            <StyledImageDisplay>
              <img src={event.mainImg} alt="pic" />
            </StyledImageDisplay>
          </StyledHeadline>
          <StyledEvents>
            {event.awards.map((award) => (
              <Info
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledEvents>
          <StyledImageDisplay>
            <img src={event.secondaryImg} />
          </StyledImageDisplay>
          <StyledImageDisplay>
            <img src={event.thirdImg} />
          </StyledImageDisplay>
          <StyledImageDisplay>
            <img src={event.fourthImg} />
          </StyledImageDisplay>
        </StyledDetails>
      )}
    </>
  );
};

// styling the components
const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledEventStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const StyledEvents = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
  }
`;

// Info component within the same component as EventsDetail then render it out in EventsDetail with a 'key'
const Info = ({ title, description }) => {
  return (
    <StyledEventStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledEventStyle>
  );
};

export default SocialDetail;
