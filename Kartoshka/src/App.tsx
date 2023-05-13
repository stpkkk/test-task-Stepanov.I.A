import React from 'react';
import { Banner, Nav, Slider, SocialLinks } from './components';

export const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Slider />
      <SocialLinks />
    </div>
  );
};
