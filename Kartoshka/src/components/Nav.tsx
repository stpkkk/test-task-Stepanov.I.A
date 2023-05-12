import React from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../assets/icons';

export const Nav: React.FC = () => {
  const navLinks = [
    { navLink: 'prices', navTitle: 'Цены' },
    { navLink: 'video', navTitle: 'Видео' },
    { navLink: 'about-us', navTitle: 'О нас' },
    {
      navLink: 'contact-us',
      navTitle: 'Оставить заявку',
      className:
        'border rounded-[130px] p-[13px] w-[240px]  text-center h-[50px] hover:text-buttonGray hover:border-white hover:bg-white',
    },
  ];

  return (
    <nav className="absolute z-10 left-0 right-0 flex justify-between py-[36px] text-white max-w-[1200px] w-full mx-auto">
      <Logo />
      <ul className="flex justify-around items-center gap-x-[59px] font-medium text-[20px] leading-[24px]">
        {navLinks.map((link) => (
          <li key={link.navLink} className={link.className}>
            <Link to={link.navLink}>{link.navTitle}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
