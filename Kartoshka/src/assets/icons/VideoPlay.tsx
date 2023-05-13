import { useMobile } from '../../hooks';

export const VideoPlay = () => {
  const isMobile = useMobile();
  return (
    <svg
      width={isMobile ? '46' : '74'}
      height={isMobile ? '46' : '74'}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 74C57.4345 74 74 57.4345 74 37C74 16.5655 57.4345 0 37 0C16.5655 0 0 16.5655 0 37C0 57.4345 16.5655 74 37 74ZM31.5 49.9904L51 38.7321C52.3333 37.9622 52.3333 36.0378 51 35.2679L31.5 24.0096C30.1667 23.2398 28.5 24.2021 28.5 25.7417L28.5 48.2583C28.5 49.7979 30.1667 50.7602 31.5 49.9904Z"
        fill="#ECBA46"
      />
    </svg>
  );
};
