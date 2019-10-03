import React from 'react';

export const WeatherIconSprite = () => (
  <div style={{ display: 'none' }}>
    <svg>
      <symbol id="svg-symbol-hail" viewBox="0 0 89 170">
        <path d="M24,2 L9,37 L24,2 Z M10,5 L2,23 L10,5 Z" id="Shape" stroke="var(--color-hail)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle fill="var(--color-hail)" r="8" cx="0" cy="52" />
      </symbol>
      <symbol id="svg-symbol-moon">
        <path
          fill="var(--color-moon)"
          d="M71 0 A 50 48, 150, 1, 0, 118 81 A 60 57, 140, 0, 1, 71 0"
        />
      </symbol>
      <symbol id="svg-symbol-star">
        <path
          fill="var(--color-star)"
          d="M169.6,38.1l-30-6.1l-6.1-30c-0.1-0.5-0.5-1-1.1-1.1c-0.7-0.1-1.3,0.4-1.4,1.1L125,32l-30,6.1c-0.5,0.1-1,0.5-1.1,1.1c-0.1,0.7,0.4,1.3,1.1,1.4l30,6.1l6.1,30c0.1,0.5,0.5,1,1.1,1.1c0.7,0.1,1.3-0.4,1.4-1.1l6.1-30l30-6.1c0.5-0.1,1-0.5,1.1-1.1C170.7,38.8,170.3,38.2,169.6,38.1z"
        />
      </symbol>
      <symbol id="svg-symbol-sun-ray">
        <path
          d="M100,44.1c3.1,0,6.1,0.3,9,0.7l-5.3-40.7c0,0,0-0.1,0-0.1c-0.3-1.9-2-3.2-4-3c-1.5,0.2-2.7,1.3-3,2.8 c0,0.1-0.1,0.2-0.1,0.2l-5.5,40.7C94.1,44.3,97,44.1,100,44.1z"
        />
      </symbol>
      <symbol id="svg-symbol-sun" fill="var(--color-sun)">
        <use xlinkHref="#svg-symbol-sun-ray" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(30, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(60, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(90, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(120, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(150, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(180, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(210, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(240, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(270, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(300, 100, 100)" />
        <use xlinkHref="#svg-symbol-sun-ray" transform="rotate(330, 100, 100)" />
        <circle
          cx="100"
          cy="100"
          r="46.1"
        />
      </symbol>
      <symbol id="svg-symbol-fog-wave">
        <path
          fill="var(--color-fog)"
          d="M198.4,55.3c-0.9-1.2-2.6-1.4-3.7-0.5l-4.6,3.6c0,0,0,0,0,0c-1,1.1-7.6,5.3-15.2,5.4 c-5.3,0.1-9.9-1.8-13.8-5.6c-12.5-12.6-26.9-5.7-32.7-0.3l0,0c0,0,0,0,0,0c-1,1.1-7.8,5.5-15.4,5.7c-5.3,0.1-9.9-1.8-13.8-5.7 c-12.5-12.5-26.9-5.7-32.7-0.3c0,0,0,0,0,0c-1,1.1-7.8,5.6-15.4,5.8c-5.3,0.1-9.9-1.8-13.8-5.7c-12.2-12.3-26.2-6-32.3-0.7L2,59.2 c-1.2,0.9-1.3,2.7-0.4,3.9c0.9,1.2,2.6,1.4,3.8,0.5l2.9-2.3v0c0,0,0,0,0,0l1.8-1.3v0c4-2.8,14-8,23.5,1.5c5.5,5.5,11.6,7.3,17,7.3 c4.7,0,8.9-1.3,11.8-2.5c1.6-0.7,5.8-2.5,7.8-4.7c0.7-0.6,13.3-11.8,25.3,0.2c5.5,5.5,11.6,7.3,17,7.3c4.7,0,8.9-1.3,11.8-2.5 c1.5-0.7,5.7-2.5,7.7-4.7l0,0c0.6-0.5,13.3-11.9,25.3,0.1c5.5,5.5,11.6,7.3,17,7.3c4.7,0,8.9-1.3,11.8-2.5c1.3-0.6,4.7-2,6.8-3.9 l5-3.6C199.2,58.3,199.3,56.4,198.4,55.3z"
        />
      </symbol>
      <symbol id="svg-symbol-snowflake-branch">
        <path
          d="M100 5 95 40 70 20 96 35 95 98 105 98 105 41 130 20 104 35z"
          strokeWidth="8"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol
        id="svg-symbol-snowflake"
        viewBox="0 0 200 200"
        fill="var(--color-snowflake)"
        stroke="var(--color-snowflake)"
      >
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(0 100 100)" />
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(60 100 100)" />
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(120 100 100)" />
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(180 100 100)" />
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(240 100 100)" />
        <use xlinkHref="#svg-symbol-snowflake-branch" transform="rotate(300 100 100)" />
      </symbol>
      <symbol id="svg-symbol-cloud" viewBox="-4 0 204 200">
        <path
          fill="var(--color-cloud)"
          d="M197.9,108.5c-4.7-17.5-22.7-28-40.2-23.4c0,0-1.3,0.3-3.5,0.9c-5.6-20.8-24.6-36.2-47.2-36.2 c-24.5,0-44.8,18.1-48.3,41.6c-0.8-0.2-1.3-0.3-1.3-0.3c-14.8-3.8-30,5-33.9,19.8c-0.9,3.5-1.1,7-0.8,10.4c-7.4,2-12,3.2-12,3.2 c-7,1.9-11.1,9-9.2,16c1.6,6.1,7.3,10,13.4,9.7h150.3c0,0,6.2-0.3,9.4-1.1C192.1,144.3,202.6,126.2,197.9,108.5z"
        />
      </symbol>
      <symbol id="svg-symbol-cloud-junior" viewBox="0 0 200 200">
        <path
          fill="var(--color-cloud)"
          d="M197.4,52.8c-2.4-8.8-11.3-14-20.1-11.7c0,0-0.6,0.2-1.8,0.5c-2.8-10.4-12.3-18.1-23.6-18.1 c-7.5,0-14.1,3.4-18.6,8.7c3.2,3.7,5.8,7.9,7.9,12.4c1.6-0.2,3.3-0.3,5-0.3c16.9,0,31.8,11.4,36.2,27.8c0.1,0.5,0.2,1,0.3,1.5 c1-0.1,2.2-0.2,3-0.4C194.6,70.7,199.8,61.6,197.4,52.8z"
        />
      </symbol>
      <symbol id="svg-symbol-lightning-bolt">
        <path
          fill="var(--color-lightning)"
          d="M89.9,124.5c0-0.7-0.7-1.2-1.6-1.2h0l0,0H58.9c-0.7,0-1.4,0.4-1.5,0.9l-11.6,33.1 c-0.1,0.1-0.1,0.3-0.1,0.5c0,0.7,0.7,1.2,1.6,1.2h0h10.9l-10.4,29.6h0c-0.1,0.2-0.1,0.4-0.1,0.6c0,1.3,1.4,2.4,3.1,2.4 c1.1,0,2.1-0.5,2.7-1.2l0,0l34.1-45.2h0c0.1-0.2,0.1-0.3,0.1-0.5c0-0.7-0.7-1.2-1.6-1.2c0,0,0,0,0,0v0H75.7l13.9-18.4 C89.8,125,89.9,124.8,89.9,124.5z"
        />
      </symbol>
      <symbol id="svg-symbol-drop">
        <path
          fill="var(--color-drop)"
          d="M82.1,123.3c0.4-0.9-0.2-1.9-1.2-2.2c-0.9-0.3-1.9,0-2.3,0.7h0l-19.4,24.8c-0.4,0.5-0.7,1-1,1.6 c-1.2,3,0.6,6.4,4,7.5c3.4,1.1,7-0.4,8.3-3.3h0L82,123.5L82.1,123.3L82.1,123.3z"
        />
      </symbol>
      <symbol id="svg-symbol-wind">
        <path
          fill="var(--color-wind)"
          d="M85.7,109.4c-3.5,0-6.4-2.8-6.4-6.4s2.8-6.4,6.4-6.4h85.2c4.1-0.1,8-1.5,10.8-4.3       c2.9-2.8,4.6-6.6,4.6-10.5c0.1-3-1.1-5.9-3.2-8c-2.1-2.2-5-3.3-8-3.4H175c-2.2,0-4.3,0.8-5.9,2.4c-1.6,1.5-2.5,3.7-2.5,5.9       c0,0.9,0.2,1.8,0.6,2.6c1.5,3.2,0.1,7-3.1,8.5c-3.2,1.5-7,0.1-8.5-3.1c-1.2-2.6-1.8-5.3-1.7-8.1c0.1-5.7,2.3-10.9,6.4-14.9       c4-3.9,9.3-6,14.8-6h0.1c6.5,0.1,12.5,2.6,17,7.2c4.5,4.6,6.9,10.7,6.9,17.1c-0.1,7.4-3.1,14.3-8.5,19.5       c-5.1,5-12.1,7.7-19.5,7.8L85.7,109.4L85.7,109.4z"
        />
      </symbol>
      <symbol id="svg-symbol-icy" viewBox="0 0 8.9 10.9">
        <path
          d="M8.9 1.1L8.1 8c0 .1-.1.2-.2.2s-.2-.1-.2-.2l-.6-4.7-1 7.4c0 .1-.1.2-.2.2s-.3-.1-.3-.2L4.6 3l-.4 3.3c0 .1-.1.1-.1.1-.1 0-.2 0-.2-.1l-.3-2.8-.8 5.6c0 .1-.1.2-.2.2s-.2-.1-.2-.2l-.7-5.2-.4 3.4c0 .1-.1.2-.2.2s-.2-.1-.2-.2L0 1V.9C0 .7 0 .6.1.4.2.1.5 0 .8 0h7.3c.3 0 .5.2.7.4.1.1.1.3.1.5v.2z"
        />
      </symbol>
    </svg>
  </div>
);
