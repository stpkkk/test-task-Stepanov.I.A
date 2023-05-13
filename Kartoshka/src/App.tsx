import React from 'react';
import { Banner, Nav, Slider } from './components';
import { Video } from './components/Video';

export const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <div className="px-[60px] sm:px-0">
        <Slider />
        <Video />
      </div>
    </div>
  );
};
