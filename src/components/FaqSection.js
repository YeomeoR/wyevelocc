import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledAbout } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';
//components
import Toggle from '../components/Toggle';
// import { useScroll } from '../components/useScroll';
import { fade } from '../animation';
// contact email
import SendEmail from '../components/SendEmail';

//icons
import email from '../images/iconmonstr-paper-plane-1.svg';
import strava from '../images/iconfinder_strava_4691462.png';
import mountain from '../images/iconmonstr-weather-94.svg';

const FaqSection = () => {
  // const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={fade}
      initial="hidden"
      animate='show'
      // ref={element}
    >
      <h2>
        <span>Info</span> and <span>FAQs</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="WVSCR">
          <Link to="/events/wvscr" style={{ textDecoration: 'none' }}>
            <div className="question">
              <div className="answer">
                <p>
                  We have two groups that ride the roads on Sunday mornings. The
                  first, group A, leaves from the church in Wye @0800 during
                  darker winter months and @0700 during light summer months.
                  Rides are usually around 2.5hrs at around 26kph avg.
                </p>
                <p>
                  The second, group B, leaves Wye at a more civilised 0900 at
                  the earliest, for a couple of hours at at slightly more
                  relaxed pace.
                </p>
                <p>
                  But it's not just Sunday that we ride out together.... there
                  are always members organising a spin around the block. We are
                  friendly bunch that love nothing more than a sunny mid-week
                  morning or afternoon ride with suitable electrolyte
                  replacement at the end of the loop. Regular stops include The
                  New Flying Horse, The Tickled Trout, The King's Head, Wye
                  Coffee Shop, The Woolpack (Chilham), The 5 Bells (Brabourne),
                  The Globe (Rye) and many more.
                </p>
                <p>
                  If you like the sound of all of the above, email us to join
                  in.
                </p>
              </div>
            </div>
          </Link>
        </Toggle>
        <Toggle title="Mountains">
          <Link to="/social/alps" style={{ textDecoration: 'none' }}>
            <div className="question">
              <img src={mountain} alt="mtnpic" />

              <div className="answer">
                <p>
                  We love riding in the mountains.... well, mostly the
                  descending bit! We try to organise a trip to the Alps every
                  year or so but could always go more often! To see more about
                  our trips, check out the ALPS section in 'Social'.
                </p>
                <p>
                  They offer a stunning backdrop for riding a bicycle and give
                  us the motivation to train through the wetter months of the
                  year in the UK.
                </p>
              </div>
            </div>
          </Link>
        </Toggle>
        <Toggle title="Strava">
          <div className="question">
            <img src={strava} alt="strava" />

            <div className="answer">
              <div className="stravaclub">
                <iframe
                  title="WyeVelo Strava Leaderboard"
                  allowtransparency
                  frameborder="10"
                  height="160"
                  scrolling="no"
                  src="https://www.strava.com/clubs/209303/latest-rides/f962cd15a94c7b4a3c1ae4c7e5924728b782c645?show_rides=false"
                  width="300"
                ></iframe>
              </div>
            </div>
          </div>
        </Toggle>
        <Toggle title="Email Us" onClick={SendEmail}>
          <div className="question">
            <img src={email} alt="email" />

            <div className="answer">
              <p onClick={SendEmail}>Click to email</p>
              <p>
                If you'd like to join us for a ride or a get in touch for
                another reason, email us at email@wyevelo.uk or by clicking on
                the paper aeroplane........
              </p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
  Link {
    text-decoration: none;
  }
`;

export default FaqSection;
