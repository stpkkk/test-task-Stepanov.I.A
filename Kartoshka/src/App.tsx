import React from 'react';
import { AboutUs, Banner, Nav, Slider, Footer, Video } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Banner />
      <div className="px-[60px] sm:px-0">
        <Slider />
        <Video />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};
