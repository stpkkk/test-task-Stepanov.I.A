import React from 'react';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  return (
    <footer className="flex_center flex-col gap-y-[30px] pt-[120px] pb-[94px] sm:pt-[63px] sm:pb-[76px]">
      <h3 className="uppercase text-[42px] leading-[51px] font-black text-gray sm:text-[30px] sm:leading-[37px]">
        Картошечка
      </h3>
      <SocialLinks />
    </footer>
  );
};
