import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="text-black bg-[url('../assets/images/banner.jpg')] h-[900px] w-full bg-no-repeat bg-center bg-cover flex_center">
      <h1 className="text-white text-[112px] leading-[137px] uppercase font-black break-all">
        Картошечка
      </h1>
    </section>
  );
};
