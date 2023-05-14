import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Burger, Close, Logo } from '../assets/icons';
import { useMobile } from '../hooks';
import { SocialLinks } from './SocialLinks';

const navLinks = [
  {
    navLink: 'prices',
    navTitle: 'Цены',
    className:
      "relative before:content-[''] before:absolute before:block before:w-full before:h-[4px]  before:-bottom-[6px] before:left-0 before:bg-potato before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
  },
  {
    navLink: 'video',
    navTitle: 'Видео',
    className:
      "relative before:content-[''] before:absolute before:block before:w-full before:h-[4px] before:-bottom-[6px] before:left-0 before:bg-potato before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
  },
  {
    navLink: 'about-us',
    navTitle: 'О нас',
    className:
      "relative before:content-[''] before:absolute before:block before:w-full before:h-[4px] before:-bottom-[6px] before:left-0 before:bg-potato before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300",
  },
  {
    navLink: 'contact-us',
    navTitle: 'Оставить заявку',
    className:
      'border rounded-[130px] p-[13px] w-[240px]  text-center h-[50px] hover:text-buttonGray hover:border-white hover:bg-white',
  },
];

export const NavDesktop: React.FC = () => {
  return (
    <nav className="absolute z-10 left-0 right-0 flex justify-between p-[36px] text-white max-w-[1200px] w-full mx-auto">
      <Logo />
      <ul className="flex justify-around items-center gap-x-[59px] font-medium text-[20px] leading-[24px]">
        {navLinks.map((link) => (
          <li key={link.navLink} className={link.className}>
            <Link to={link.navLink} as="link.navLink" spy smooth>
              {link.navTitle}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NavMobile: React.FC = () => {
  const [isMobileMenu, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return isMobileMenu ? (
    <nav className="fixed z-40 min-h-screen w-screen pl-[60px] pt-[50px] pr-[38px] pb-[87px] bg-white text-lightGray font-medium text-[30px] leading-[37px] ">
      <button
        className="flex ml-auto focus:outline-none mb-[32px]"
        onClick={handleToggleMobileMenu}
        type="button"
      >
        <Close />
      </button>
      <div className="flex_start flex-col gap-y-[119px]">
        <ul className="flex_start flex-col gap-y-[43px]">
          {navLinks.map((link) => (
            <li key={link.navLink} onClick={handleLinkClick}>
              <Link to={link.navLink} as="link.navLink">
                {link.navTitle}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex_start flex-col gap-y-[20px]">
          <div className="uppercase font-black text-gray ">Картошечка</div>
          <SocialLinks />
        </div>
      </div>
    </nav>
  ) : (
    <div className="absolute z-10 flex_between flex-row-reverse py-[36px] px-[38px] w-screen">
      <button
        onClick={handleToggleMobileMenu}
        type="button"
        className="focus:outline-none"
      >
        <Burger />
      </button>
      <Logo />
    </div>
  );
};

export const Nav: React.FC = () => {
  const isMobile = useMobile();

  return isMobile ? <NavMobile /> : <NavDesktop />;
};
