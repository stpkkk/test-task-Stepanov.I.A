import React from 'react';

export const Banner: React.FC = () => {
  return (
    <section className="w-full min-h-[900px] text-white bg-[url('../assets/images/banner.jpg')] bg-no-repeat bg-center bg-cover flex_center sm:min-h-[800px]">
      <h1 className="text-[112px] leading-[137px] uppercase font-black break-all p-[36px] sm:px-[38px] sm:text-[92px] sm:leading-[112px]">
        Ка
        <br className="hidden sm:block" />
        ртошечка
      </h1>
    </section>
  );
};
