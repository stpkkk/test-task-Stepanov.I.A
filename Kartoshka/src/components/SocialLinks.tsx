import React from 'react';
import { Facebook, Insta, Twitter, VK } from '../assets/icons';

const links = [
  { path: 'https://vk.com', image: <VK />, hoverColor: '#5783C6' },
  { path: 'https://facebook.com', image: <Facebook />, hoverColor: '#3A83F1' },
  { path: 'https://twitter.com', image: <Twitter />, hoverColor: '#52D3FC' },
  { path: 'https://instagram.com', image: <Insta />, hoverColor: '#FF4F79' },
];

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex_center space-x-4">
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={`bg-background w-[40px] h-[40px] flex_center rounded-full hover:bg-[${link.hoverColor}] hover:fill-white`}
        >
          <li>{link.image}</li>
        </a>
      ))}
    </ul>
  );
};
