import React, {Fragment} from 'react';

export default ({width, height, color, padding, margin}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    viewBox="0 0 78 91"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M29 25C28.2193 25.007 27.6091 25.4026 27.2812 25.9687L20.8438 37H8C3.6026 37 0 40.6026 0 45V83C0 87.3974 3.6026 91 8 91H70C74.3974 91 78 87.3974 78 83V45C78 40.6026 74.3974 37 70 37H57.1562L50.7188 25.9687C50.3641 25.3795 49.6877 24.9983 49 25H29ZM30.125 29H47.875L54.2812 40C54.6281 40.6007 55.3063 40.9953 56 41H70C72.2506 41 74 42.7494 74 45V83C74 85.2505 72.2506 87 70 87H8C5.74944 87 4 85.2505 4 83V45C4 42.7494 5.74944 41 8 41H22C22.6937 40.995 23.3719 40.6007 23.7188 40L30.125 29ZM39 47C30.1871 47 23 54.1871 23 63C23 71.8128 30.1871 79 39 79C47.8129 79 55 71.8128 55 63C55 54.1871 47.8129 47 39 47ZM39 51C45.6511 51 51 56.3489 51 63C51 69.6511 45.6511 75 39 75C32.3489 75 27 69.6511 27 63C27 56.3489 32.3489 51 39 51Z"
    />
    <path
      fill={color}
      d="M60 15.5L65 1H76.5L69.5 13H74.5L60 30.5L65 15.5H60Z"
      stroke="black"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);
