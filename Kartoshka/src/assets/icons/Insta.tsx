import React, { useState } from 'react';

export const Insta: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const circleFill = isHovered ? '#FF4F79' : '#e5e5e5';
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
        d="M19.9956 10.9821C22.9333 10.9821 23.2782 10.9952 24.4393 11.0476C25.5131 11.0957 26.0937 11.2747 26.4821 11.4275C26.9972 11.6283 27.3639 11.8641 27.748 12.2483C28.1321 12.6325 28.3722 12.9992 28.5687 13.5144C28.7171 13.903 28.9004 14.4836 28.9484 15.5576C29.0008 16.719 29.0139 17.0639 29.0139 20.0022C29.0139 22.9405 29.0008 23.2854 28.9484 24.4467C28.9004 25.5207 28.7214 26.1014 28.5687 26.49C28.3679 27.0052 28.1321 27.3719 27.748 27.7561C27.3639 28.1403 26.9972 28.3804 26.4821 28.5769C26.0937 28.7253 25.5131 28.9087 24.4393 28.9567C23.2782 29.0091 22.9333 29.0222 19.9956 29.0222C17.0579 29.0222 16.7131 29.0091 15.552 28.9567C14.4782 28.9087 13.8976 28.7297 13.5091 28.5769C12.994 28.3761 12.6274 28.1403 12.2433 27.7561C11.8591 27.3719 11.619 27.0052 11.4226 26.49C11.2742 26.1014 11.0909 25.5207 11.0429 24.4467C10.9905 23.2854 10.9774 22.9405 10.9774 20.0022C10.9774 17.0639 10.9905 16.719 11.0429 15.5576C11.0909 14.4836 11.2698 13.903 11.4226 13.5144C11.6234 12.9992 11.8591 12.6325 12.2433 12.2483C12.6274 11.8641 12.994 11.6239 13.5091 11.4275C13.8976 11.279 14.4782 11.0957 15.552 11.0476C16.7131 10.9909 17.0623 10.9821 19.9956 10.9821ZM19.9956 9C17.0099 9 16.6345 9.0131 15.4603 9.06549C14.2905 9.11788 13.4917 9.30562 12.7933 9.5763C12.0687 9.85573 11.4575 10.2356 10.8464 10.8468C10.2353 11.458 9.85992 12.0736 9.57619 12.794C9.30556 13.4926 9.11786 14.2915 9.06548 15.466C9.0131 16.636 9 17.0115 9 19.9978C9 22.9841 9.0131 23.3596 9.06548 24.534C9.11786 25.7041 9.30556 26.5031 9.57619 27.206C9.85556 27.9307 10.2353 28.542 10.8464 29.1532C11.4575 29.7644 12.073 30.1399 12.7933 30.4237C13.4917 30.6944 14.2905 30.8821 15.4647 30.9345C16.6389 30.9869 17.0099 31 20 31C22.9901 31 23.3611 30.9869 24.5353 30.9345C25.7052 30.8821 26.504 30.6944 27.2067 30.4237C27.9314 30.1443 28.5425 29.7644 29.1536 29.1532C29.7647 28.542 30.1401 27.9264 30.4238 27.206C30.6944 26.5074 30.8821 25.7085 30.9345 24.534C30.9869 23.3596 31 22.9885 31 19.9978C31 17.0071 30.9869 16.636 30.9345 15.4616C30.8821 14.2915 30.6944 13.4926 30.4238 12.7896C30.1444 12.0649 29.7647 11.4537 29.1536 10.8424C28.5425 10.2312 27.927 9.85573 27.2067 9.57194C26.5083 9.30125 25.7095 9.11351 24.5353 9.06112C23.3567 9.0131 22.9813 9 19.9956 9Z"
        fill={pathFill}
      />
      <path
        d="M19.9956 14.3527C16.879 14.3527 14.3472 16.8805 14.3472 20.0022C14.3472 23.1238 16.8746 25.6517 19.9956 25.6517C23.1167 25.6517 25.644 23.1238 25.644 20.0022C25.644 16.8805 23.1167 14.3527 19.9956 14.3527ZM19.9956 23.6652C17.9702 23.6652 16.329 22.0236 16.329 19.9978C16.329 17.972 17.9702 16.3304 19.9956 16.3304C22.021 16.3304 23.6623 17.972 23.6623 19.9978C23.6623 22.0236 22.021 23.6652 19.9956 23.6652Z"
        fill={pathFill}
      />
      <path
        d="M25.8667 15.4441C26.5947 15.4441 27.1849 14.8538 27.1849 14.1256C27.1849 13.3974 26.5947 12.8071 25.8667 12.8071C25.1386 12.8071 24.5484 13.3974 24.5484 14.1256C24.5484 14.8538 25.1386 15.4441 25.8667 15.4441Z"
        fill={pathFill}
      />
    </svg>
  );
};
