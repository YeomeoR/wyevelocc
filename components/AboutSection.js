import React from 'react';
import galibier from '../images/Galibier-WV-2018 (2).png';
import WVLogo from '../images/WyeVeloLogo.png';

const AboutSection = () => {
  return (
    <div className="description">
      <div className="mainIcon">
        <img src={WVLogo} alt="" />
      </div>
      <div className="hide">
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={galibier} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
