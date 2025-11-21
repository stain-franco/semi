import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);


export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);


export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={666.667}
    height={666.667}
    viewBox="0 0 500 500"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M252 99.1c-9.3 3.9-12.9 15.4-7.5 24.4 4 7 14.9 9.7 23 5.8 3.9-1.9 4.1-2.2 2.1-4.8-1.2-1.7-1.4-1.7-3.7-.2-5.4 3.9-15.7.6-17.9-5.6l-1-2.9 13.5.8 13.5.7v-3c0-8.2-6.6-15.4-14.8-15.9-2.6-.2-5.8.1-7.2.7zm13.7 7.4c1.3 1.4 2.3 3.5 2.3 4.6 0 1.9-.4 2-9.7 1.3-5.4-.4-10-.8-10.2-1-.9-.8 2.5-5.6 4.9-7 3.7-2.1 10-1.1 12.7 2.1zM214.5 102.9c-2.2 1-4.6 2.9-5.2 4.2l-1.1 2.4-.7-2.8c-.5-1.9-1.2-2.6-2.2-2.3-.8.3-1.9.6-2.5.6-1.4 0-.3 6.6 3.2 20.8 1.6 6.2 3.2 13.3 3.5 15.6.9 5.8 1.8 7 4.7 6.3l2.5-.7-1.4-7.1c-.7-4-1.1-7.4-.9-7.6.2-.3 1.4.1 2.7.7 3 1.6 10.5.7 13.8-1.7 7.2-5.4 9-13.7 4.9-22-3.9-7.7-12.7-10.4-21.3-6.4zm14.3 6.4c1.7 1.8 2.6 4 2.9 7.4.5 4.2.1 5.3-2.2 8.1-5.1 6.1-13.9 5.2-17.6-1.9-3.2-6.3-2-11.1 3.7-15 3.8-2.6 9.8-2 13.2 1.4zM281.7 115.2c-5.3 17.6-5.4 18.4-2.6 19.1 1.3.4 2.7.3 3-.1.4-.4 1.7-4.5 2.9-9.1 2.9-10.8 5.3-13.6 11.4-13.5 3.6.1 4.7-.3 5.1-1.7.4-1.1.3-2.3 0-2.9-.8-1.3-5.6-1.3-9 0-2.4.9-2.6.8-2.3-1.3.2-1.7-.2-2.3-2.2-2.5-2.4-.3-2.7.3-6.3 12zM178.7 116.4c-8 2.9-12.2 9.1-11.5 17.1 1.4 17.1 23.4 20.9 31.5 5.5 6.8-12.7-6.4-27.6-20-22.6zm10.4 5.6c2.4 1.3 5.9 8.1 5.9 11.6 0 1.6-1.3 3.9-3.4 6-4.4 4.4-9.9 4.7-14.4.9-6-5.1-6.5-11.3-1.2-16.6 2.2-2.3 3.8-2.9 7-2.9 2.3 0 5 .5 6.1 1zM142.5 126c-1.7 1.9-1.7 2.1.8 5.2 1.4 1.8 4.4 5.3 6.7 7.8s7.6 8.4 11.7 13.2c4.2 4.9 7.7 8.8 8 8.8 1.1 0 4.3-2.2 4.3-2.9 0-.7-15.3-18.5-26.8-31-2.8-3.1-2.9-3.1-4.7-1.1zM346.5 147.1c-8.2 7.3-15 13.8-15 14.7 0 .8.7 1.9 1.6 2.5 1.3.8 2.9 0 7.9-4.4l6.2-5.4 3.6 4c2.1 2.2 5.3 5.9 7.3 8.2 3.5 4.2 3.6 4.3 5.4 2.3 1.7-1.9 1.6-2.2-4.9-9.5-3.6-4.2-6.6-8-6.6-8.4 0-.5 2.4-2.9 5.3-5.4l5.3-4.5 7.7 8.9c6.9 8 8 8.8 9.8 7.8 1.1-.5 1.9-1.4 1.7-1.9-.7-1.9-18.3-22-19.3-22-.5 0-7.7 5.9-16 13.1zM310.1 141.4c-.8 1-1.1 2.6-.7 4.2.5 2 1.2 2.5 3.3 2.2 1.4-.2 3.1-1.1 3.7-2.1 2.3-3.6-3.6-7.6-6.3-4.3zM135.4 152.9c-7.2 4.4-10 14.3-6.2 21.7 2.7 4.9 9.1 8.8 14.8 8.8 8.8 0 17-8.2 17-16.9 0-3.1-.3-3.5-2.5-3.5s-2.5.4-2.5 3.5c0 4.9-6.3 11.5-11.1 11.5-6.3 0-6.4-1.1-.2-9.1 3.1-4.1 6.7-8.7 8-10.2 2.7-3.4 2.4-4.2-2.4-6.2-4.9-2.1-11.2-1.9-14.9.4zm12 4c.3.5-2 4.2-5.1 8.3-3.1 4-5.8 7.5-6 7.7-.1.2-.9-.1-1.7-.8-3.5-2.9-2.1-11.2 2.5-14.5 2.5-1.7 9.4-2.2 10.3-.7zM369 177.3c-6.1 3-11.2 6.3-12.3 7.9-4.1 5.5-1.6 15 5.1 19.5 3 2 3.1 2.2 1.2 2.8-1.7.5-1.8 1-.9 2.8.7 1.2 1.3 2.3 1.4 2.4.2.3 12.3-4.8 22.7-9.6 6.6-2.9 6.8-3.1 5.6-5.6-1.3-2.9-1.8-2.9-12.2 2.1-7.8 3.8-11.1 4.2-14.4 1.8-2.5-1.8-5.2-6.4-5.2-9.2 0-3 4.9-6.7 14.2-10.8l8.6-3.8-1.4-2.8c-.8-1.5-1.6-2.8-1.7-2.7-.1 0-4.9 2.4-10.7 5.2zM116.8 177.5c-1.2 2.7-1.7 2 16.2 20.4l2.5 2.6-14.1.3c-14 .3-14.1.3-15.3 2.8-.6 1.4-1.1 2.7-1.1 2.9 0 .2 7.8.2 17.3-.2 14.2-.4 17.4-.8 18.5-2.2.7-.9 1.1-2.3 1-3.2-.2-1-5.6-7.2-12.1-13.8-11.6-12-11.8-12.1-12.9-9.6zM394 213.6c-5.8 1.4-14.7 3.4-19.7 4.5-9.2 2-9.3 2.1-9.3 5.1 0 2.8.2 3 2.7 2.3 1.4-.3 10.1-2.2 19.2-4.2s18-3.9 19.6-4.2c1.7-.4 2.9-1 2.8-1.4-.2-.4-.3-1.6-.3-2.7 0-2.5-1.4-2.5-15 .6zM112.2 215c-6.1 1.4-11.2 8.6-11.2 15.8 0 4 3.1 9.7 6.7 12.4 3.1 2.4 4.6 2.8 9.7 2.8 7.4-.1 9.9-1.4 13.7-7 2.4-3.6 2.9-5.3 2.9-10.4 0-7.5-2.4-11.5-5.4-9.3-1.6 1.2-1.7 1.7-.6 3.7.7 1.3 1 4.3.8 7.2-.6 5.6-3.4 9.2-8.2 10.4-2.7.6-2.8.5-2.3-1.7 1.3-5.5 3-21.8 2.4-23.3-.7-1.7-3.1-1.9-8.5-.6zm3.4 12.7c-1.2 13.6-1.8 14.4-6.7 9.2-3.3-3.5-3.7-7.4-1.4-11.9 1.7-3.2 4-4.9 6.9-5 1.7 0 1.8.6 1.2 7.7zM399 231.7c-6.9.7-16.8 1.6-22 2.1-9.4.7-9.5.7-9.8 3.4-.3 2.7-.2 2.8 4.5 2.7 7.1 0 39.1-3.4 39.8-4.1.4-.3.5-1.7.3-3l-.3-2.3-12.5 1.2zM107.7 252.4c-2.7.7-6.1 2.2-7.5 3.3-3.6 2.6-8.2 11.8-8.2 16.4 0 3.5 3.6 22.8 4.4 23.6.2.2 7.3-.9 15.7-2.6 8.5-1.6 17.5-3.3 20.2-3.6 2.6-.4 4.9-1.1 5.2-1.5.7-1.1-3.5-22.1-5-25-2.5-4.7-7.6-9-12.8-10.5-5.9-1.8-5.8-1.8-12-.1zm16.8 9.7c2.9 2.9 3.8 4.8 5.4 12.2 1.4 6.4 1.6 8.9.8 9.2-3.3.9-30 5.5-30.3 5.2-.2-.2-1.1-3.8-1.9-7.9-2-9.4-1-14 3.7-18.5 4.3-4 5.2-4.3 12.6-4 5.6.3 6.6.6 9.7 3.8zM369.2 263.7c-7 8.9-7.5 23.5-.9 27.7 7 4.7 12.7 2.1 18.3-8.1 6.3-11.6 9.1-13.4 13.2-9 3.1 3.3 2.8 8.3-.8 15.3-2.4 4.4-2.8 5.9-1.8 6.6 2.4 1.5 4.2.3 6.7-4 3.5-6.4 4-15.9 1.2-20.5-2.1-3.4-6.3-5.7-10.2-5.7-2.9 0-8.7 5.8-11.5 11.4-1.4 2.8-3.4 6.2-4.5 7.5-2.3 2.8-6.7 3.1-8.6.5-3-4.2 0-16.7 5-20.6 2.2-1.7 2.2-1.7.2-3.2-2.8-2.1-3-2.1-6.3 2.1zM358.2 298.3c-3.2 1.8-5.1 5-5.4 8.8-.3 2.8.1 3.5 1.8 3.7 1.7.2 2.3-.4 2.7-2.7 1.1-5.6 3.8-5.8 13.5-1 4.8 2.3 8.9 4.3 9.1 4.5.2.2-.4 2.2-1.4 4.5-1.6 3.5-1.7 4.2-.4 5 2.3 1.4 2.8 1.1 4.6-2.6 1.7-3.7 3.1-4.2 6.4-2.5 1.6.9 2.1.6 3.1-1.6.9-1.9 1-2.8.2-3.1-.6-.2-1.9-1-2.9-1.7-1.4-1-1.5-1.6-.6-3.4 1-1.8.8-2.3-1-3.3-2.1-1.1-3.8 0-3.9 2.3 0 1.5-2.1.8-11.3-3.7-10-4.9-11-5.1-14.5-3.2zM138.4 310c-7.2 1.7-13.4 9.2-13.4 16.1 0 1.7 1 5.2 2.3 7.7 1.7 3.5 3.3 5 6.8 6.7l4.7 2.1-3.6 2.5c-2 1.3-5 3.6-6.9 5-3.3 2.7-3.3 2.7-1.4 5l1.8 2.3 6.9-5.3c3.8-2.9 11.9-9 18.1-13.5 11-8.1 11.2-8.3 9.6-10.5-1.1-1.6-1.8-2-2.6-1.2-1.9 1.9-2.7 1.2-2.7-1.9 0-1.7-.7-4.4-1.4-5.9-2-3.7-8.2-9.1-10.6-9.1-1 0-2.4-.2-3.2-.4-.7-.2-2.7-.1-4.4.4zm8 6.4c4.4 1.9 6.6 5.2 6.6 10.1 0 9.4-12.6 14.9-18.8 8.2-2.8-2.9-4.1-6.7-3.5-9.9.6-3 5.8-8.4 8.8-9.1 3.3-.8 3.4-.8 6.9.7zM348.5 315c-3.8 1.6-7.6 6.6-8.2 10.9-.5 3.5-.8 3.9-2 2.9s-1.8-.9-2.9.7c-.8 1-1.4 2.1-1.4 2.5 0 1 14.4 12.7 17.9 14.4 6.1 3.2 12.2.6 17.2-7.2 3.3-5.2 3.8-9.6 1.2-10.6-2.1-.8-2.7-.1-4.2 5.1-1.9 6.9-8.1 10.2-12.6 6.9-1.8-1.3-1.8-1.5 1-5.1 5.2-6.4 6.5-8.9 6.5-12.2 0-4.5-.9-6.2-4.1-7.8-3.1-1.7-5.4-1.8-8.4-.5zm6.8 7.1c1.5 2.3.2 6-3.6 10.3-3 3.6-3.5 3.8-5.4 2.5-3.8-2.3-3.6-8.2.3-12.4 2.7-2.9 7-3.1 8.7-.4zM165 339.5c0 2.1.5 2.5 2.9 2.5 3.4 0 9.1 3.7 10.8 7 1.5 3 1.7 8.6.3 9.5-.5.3-3.7-1.6-7.1-4.2-3.3-2.6-7.9-6.1-10-7.6l-4-2.8-1.9 2.3c-4.3 5.2-3.4 15.1 1.8 20 4 3.8 6.5 4.8 11.9 4.8 9.6 0 17.3-9.1 15.8-18.8-1.1-7.4-10.1-15.1-17.7-15.2-2.3 0-2.8.4-2.8 2.5zm3.1 17.2c4.3 3.2 7.9 6.1 7.9 6.6 0 1.1-4.6 2.7-7.9 2.7-3.4 0-7.9-3.3-9.2-6.8-.9-2.4-.4-8.2.7-8.2.3 0 4.1 2.6 8.5 5.7zM324.1 341c-6.4 1.5-13.1 8.6-13.1 14 0 2.4.3 2.7 2.5 2.2 1.6-.3 2.5-1.1 2.5-2.3 0-1 1.3-3.3 2.8-5 3.8-4.2 10.4-5.1 14.5-1.9 3.9 3.1 6 7.6 5.3 11.5-1 5.2-7.7 10.2-12.2 9.1-1.9-.5-2.6-.2-3.3 1.6-2.5 6.7 12.1 4.2 17.5-3 3.8-5 4.5-12.6 1.5-17.9-3.8-6.7-10.8-9.9-18-8.3zM301.3 354l-2.2.9 1.9 4.2c1.8 4.3 1.8 4.3-.3 8.1-1.2 2.1-2.5 3.8-2.9 3.8-.3 0-4.1-2-8.3-4.5-7.2-4.3-7.9-4.5-11-3.4l-3.4 1.3 5.7 3.4c3.1 1.9 7.8 4.8 10.4 6.4l4.6 2.9-3.8 8.2c-2.1 4.5-3.7 8.3-3.5 8.5.2.2 1.6-.3 3.2-1.2 2.2-1.1 4.2-4.1 7.9-11.5 2.7-5.6 5.1-10.1 5.4-10.1.3 0 2.7 5.9 5.5 13.1 4.8 12.5 5.1 13 7.5 12.4 1.4-.4 2.6-.8 2.8-1 .2-.2-1.2-4.3-3.1-9.2-1.9-4.8-4.7-12-6.2-15.8-4.9-13-6.9-17.5-7.4-17.4-.3 0-1.6.4-2.8.9zM196.4 365.7c-3.1 4.9-8.7 13.2-12.3 18.6-5.4 8-6.3 10-5.1 10.7 3 1.9 4.7.6 10.7-8.8 11.2-17.4 12.5-19.2 13.3-19.2.4 0 1 7.1 1.4 15.7.9 19 1.1 20 4.2 20.6 2.2.4 3.5-1.1 12.7-14.6l10.2-15 .6 6.4c.4 3.5 1 11.6 1.4 18.1.7 11.4.7 11.6 3.2 12.3 1.4.3 2.8.4 3 .1.6-.6-2.2-43.5-2.9-44.1-.2-.3-1.8-.7-3.4-1-2.8-.5-3.2 0-12.4 13.9-5.2 8-9.8 14-10.1 13.4-.4-.6-1-8.4-1.4-17.4l-.7-16.3-3.1-1c-1.6-.6-3.1-1.1-3.2-1.1-.2 0-2.9 3.9-6.1 8.7zM255.2 365.9c-.8.5-1.2 2.1-1 3.7.2 2.3.9 3 2.9 3.2 3.6.4 5.5-2.1 4.1-5.3-1.2-2.5-3.6-3.2-6-1.6z" />
  </svg>
);

