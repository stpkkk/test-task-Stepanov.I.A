import React from 'react';

import { VideoPlay } from '../assets/icons';

export const Video: React.FC = () => (
  <section
    className="rounded-[20px] f-full min-h-[840px] bg-gray pt-[70px] flex items-center flex-col sm:min-h-[400px] sm:pt-[40px] sm:px-[35px] sm:pb-[73px]"
    id="video"
  >
    <h2 className="subtitle text-white mb-[84px] sm:mb-[43px] ">Видео</h2>
    <div className="flex_center relative bg-darkGray max-w-[770px] w-full min-h-[440px] sm:min-h-[178px] rounded-[20px] cursor-pointer sm:rounded-[10px]">
      <button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        type="button"
      >
        <VideoPlay />
      </button>
      <video className="absolute w-full h-full object-cover rounded-[20px]">
        <source src="https://www.youtube.com/watch?v=tG6YvsS1RRA" />
        <track src="" kind="captions" />
      </video>
    </div>
  </section>
);
