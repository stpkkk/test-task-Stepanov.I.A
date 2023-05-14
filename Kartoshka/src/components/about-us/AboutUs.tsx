import React, { useState } from 'react';
import chiefGirl from '../../assets/images/chief-girl.png';
import firstPotato from '../../assets/images/potato-first.png';
import mutedPotato from '../../assets/images/potato-muted.png';
import { LeaveRequestForm } from './LeaveRequestForm';
import { useMobile } from '../../hooks';

export const AboutUs: React.FC = () => {
  const isMobile = useMobile();
  return (
    <section
      className="relative flex_center flex-col pt-[89px] sm:pt-[50px]"
      id="about-us"
    >
      <h2 className="subtitle mb-[59px] sm:mb-[39px]">О нас</h2>
      <div className="flex max-w-[752px] gap-x-[20px] sm:flex-col sm:flex_center">
        <img
          src={chiefGirl}
          alt="chief-girl"
          className="sm:absolute sm:right-[11em] sm:top-[3em] sm:opacity-[0.4]"
        />
        <div className="text-[18px] leading-[29px] sm:text-[12px] sm:leading-[19px] px-[42px] sm:px-[71px] sm:pb-[43px] sm:text-center sm:font-semibold font-normal sm:z-20">
          <p>
            Если картошка, запеченная в духовке, получается не всегда такой как
            хочется (сухая или наоборот мокрая, сыроватая внутри, недостаточно
            удачная по специям) — дайте шанс этому рецепту.
          </p>
          <br />
          <p>
            Такая картошечка по-деревенски стабильно получается очень вкусная,
            хрустящая снаружи и мягкая, как пюрешка внутри, ароматная — в общем
            пальчики оближешь. Рецепт у меня простой, но с технологическим
            секретом, который и решает дело.
          </p>
        </div>
      </div>
      <LeaveRequestForm />
      {isMobile || (
        <img
          className="absolute right-[4em] bottom-[12em] "
          src={firstPotato}
          alt="potato"
        />
      )}
      {isMobile || (
        <img
          className="absolute top-[5em] left-[5em]"
          src={mutedPotato}
          alt="potato"
        />
      )}
    </section>
  );
};
