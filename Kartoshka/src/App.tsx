import React from 'react';

import { AboutUs, Banner, Footer, Nav, Slider, Video } from './components';

export const App: React.FC = () => (
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
