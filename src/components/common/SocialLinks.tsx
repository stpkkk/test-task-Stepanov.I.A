import React from 'react';

import { Facebook, Insta, Twitter, VK } from '../../assets/icons';

const links = [
  { path: 'https://vk.com', image: <VK /> },
  {
    path: 'https://facebook.com',
    image: <Facebook />,
  },
  {
    path: 'https://twitter.com',
    image: <Twitter />,
  },
  { path: 'https://instagram.com', image: <Insta /> },
];

export const SocialLinks: React.FC = () => (
  <ul className="flex_center space-x-4">
    {links.map((link) => (
      <a key={link.path} href={link.path}>
        <li>{link.image}</li>
      </a>
    ))}
  </ul>
);
