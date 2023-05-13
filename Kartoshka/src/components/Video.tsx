import React, { useRef, useState } from 'react';
import { VideoPlay } from '../assets/icons';

export const Video: React.FC = () => {
  return (
    <section className="f-full min-h-[840px] bg-gray pt-[70px] flex items-center flex-col">
      <h2 className="subtitle text-white mb-[84px]">Видео</h2>
      <div className="flex_center relative bg-darkGray max-w-[770px] w-full min-h-[440px] rounded-[20px] cursor-pointer">
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <VideoPlay />
        </button>
        <video className="absolute w-full h-full object-cover rounded-[20px]">
          <source src="https://www.youtube.com/watch?v=tG6YvsS1RRA" />
        </video>
      </div>
    </section>
  );
};
