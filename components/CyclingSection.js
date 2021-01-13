import React from 'react';
import mtb from '../images/iconmonstr-bicycle-1.svg';
import road from '../images/iconmonstr-bicycle-4.svg';
import map from '../images/iconmonstr-navigation-11.svg';
import groups from '../images/iconmonstr-user-30.svg';
import downs from '../images/kentDowns.png';

const CyclingSection = () => {
  return (
    <div className="cycling">
      <h2>
        <span>Cycling</span> in Kent
      </h2>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={road} alt="road" />
            <h3>Road</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={mtb} alt="mtb" />
            <h3>MTB</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={map} alt="routes" />
            <h3>Routes</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={groups} alt="groups" />
            <h3>Groups</h3>
          </div>
          <p>this should be a tag or revealing card like faq</p>
        </div>
      </div>
      <div className="image">
        <img src={downs} alt="the downs" />
      </div>
    </div>
  );
};

export default CyclingSection;
