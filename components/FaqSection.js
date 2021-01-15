import React from 'react';
//icons
import strava from '../images/iconfinder_strava_4691462.png';
import mountain from '../images/iconmonstr-weather-94.svg';
import email from '../images/iconmonstr-paper-plane-1.svg';
import styled from 'styled-components';
import { StyledAbout } from '../styles';

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        <span>Info</span> and <span>FAQs</span>
      </h2>
      <div className="question">
        <h4>WVSCR</h4>
        <div className="answer">
          <p>
          We have two groups that ride the roads on Sunday mornings. The first, group A, leaves from the church in Wye @0800 during darker winter months and @0700 during light summer months. Rides are usually around 2.5hrs at around 26kph avg.
        
            
          </p>
          <p>The second, group B, leaves Wye at a more civilised 0900 at the earliest, for a couple of hours at at slightly more relaxed pace.</p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question icon">
        <img src={mountain} alt="" />

        <h4> Mountains</h4>
        <div className="answer">
          <p>
            I want a link and an icon to a mountains trip info and pic
            page/section
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            ducimus quis dolorum?
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question icon">
        <img src={strava} alt="strava" />
        <h4> Strava</h4>
        <div className="answer">
          <p>
            {/* <iframe allowtransparency frameborder='10' height='160' scrolling='no' src='https://www.strava.com/clubs/209303/latest-rides/f962cd15a94c7b4a3c1ae4c7e5924728b782c645?show_rides=false' width='300'></iframe> */}
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
      <div className="question icon">
        <img src={email} alt="" />
        <h4> Email Us</h4>
        <div className="answer">
          <p>mailto: SendEmail</p>
          <p>
            If you'd like to join us for a ride or a get in touch for another
            reason, email us by clicking here...
          </p>
          <div className="faq-line"></div>
        </div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    text-shadow: 1px 1px 2px;
    color: #cccccc;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    text-shadow: 1px 1px 2px;
    p {
      padding: 1rem 0rem;
      text-shadow: 1px 1px 2px;
  
    }
  }
`;

export default FaqSection;
