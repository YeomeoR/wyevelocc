import React from 'react';
import AboutSection from '../components/AboutSection';
import CyclingSection from '../components/CyclingSection';
import FaqSection from '../components/FaqSection';
// Components
import ScrollTop from '../components/ScrollTop'
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />;
      <CyclingSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
