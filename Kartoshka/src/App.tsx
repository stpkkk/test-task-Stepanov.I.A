import React from 'react';
import { Banner, Nav, Slider } from './components';

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <div>
        <Banner />
        <Slider />
      </div>
    </>
  );
};
