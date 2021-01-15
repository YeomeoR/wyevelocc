import React from 'react';
import mtb from '../images/iconmonstr-bicycle-1.svg';
import road from '../images/iconmonstr-bicycle-4.svg';
import map from '../images/iconmonstr-navigation-11.svg';
import groups from '../images/iconmonstr-user-30.svg';
import downs from '../images/Kent Downs (2).jpg';
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles';

const CyclingSection = () => {
  return (
    <StyledCycling>
      <StyledDescription>
      <h2>
        <span>Cycling</span> in Kent
      </h2>
      <StyledCards>
        <StyledCard>
          <div className="icon">
            <img src={road} alt="road" />
            <h3>Road</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </StyledCard>
        <StyledCard>
          <div className="icon">
            <img src={mtb} alt="mtb" />
            <h3>MTB</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </StyledCard>
        <StyledCard>
          <div className="icon">
            <img src={map} alt="routes" />
            <h3>Routes</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </StyledCard>
        <StyledCard>
          <div className="icon">
            <img src={groups} alt="groups" />
            <h3>Groups</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </StyledCard>
        </StyledCards>
        </StyledDescription>
      <StyledImage>
        <img src={downs} alt="the downs" />
      </StyledImage>
    </StyledCycling>
  );
};

//styled
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: #FECEF6;
      color: black;
      padding: 1rem;
    }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const StyledCycling = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
export default CyclingSection;
