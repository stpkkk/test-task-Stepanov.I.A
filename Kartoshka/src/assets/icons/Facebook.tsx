import React, { useState } from 'react';

export const Facebook: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const circleFill = isHovered ? '#3A83F1' : '#e5e5e5';
  const pathFill = isHovered ? 'white' : '#BFBFBF';

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle cx="20" cy="20" r="20" fill={circleFill} />
      <path
        d="M20.7893 32V21.0485H24.3271L24.8573 16.7802H20.7893V14.0583C20.7893 12.8191 21.1155 11.9823 22.8284 11.9823H25V8.16946C24.6228 8.1165 23.328 8 21.8292 8C18.689 8 16.548 9.99117 16.548 13.6346V16.7802H13V21.0485H16.548V32H20.7893V32Z"
        fill={pathFill}
      />
    </svg>
  );
};
