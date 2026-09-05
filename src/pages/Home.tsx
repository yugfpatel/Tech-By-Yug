import React, { useEffect } from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import WhyUs from '../sections/WhyUs';
import Projects from '../sections/Projects';
import Process from '../sections/Process';
import About from '../sections/About';
import Contact from '../sections/Contact';

const Home = () => {
  useEffect(() => {
    document.title = "Tech By Yug — Technology. Built for Business.";
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <About />
      <Contact />
    </>
  );
};

export default Home;
