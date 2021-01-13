import React from 'react';
//icons
import strava from '../images/iconfinder_strava_4691462.png';
import mountain from '../images/iconmonstr-weather-94.svg';
import email from '../images/iconmonstr-paper-plane-1.svg';

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        <span>Info</span> and <span>FAQs</span>
      </h2>
      <div className="question">
        <h4>WVSCR</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum
            officiis autem.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="question icon">
        <img src={strava} alt="strava" />
        <h4> Strava</h4>
        <div className="answer">
          <p>I want a strava icon and a link to WV strava Club.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos quod
            nulla obcaecati.
          </p>
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
        </div>
      </div> 
    </div>
  );
};

export default FaqSection;
