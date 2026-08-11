import React from 'react';

interface DsaFeedLogoProps {
  className?: string;
  textColor?: string;
  accentColor?: string;
}

export const DsaFeedLogo: React.FC<DsaFeedLogoProps> = ({
  className = "h-8",
  textColor = "#101B3D",
  accentColor = "#3478E5"
}) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 380 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="DSAfeed Logo"
      >
        {/* Main Brand Text: DSAfeed */}
        <text
          x="10"
          y="65"
          fill={textColor}
          fontSize="68"
          fontWeight="900"
          fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
          letterSpacing="-1.5"
        >
          DSAf
        </text>

        {/* First Smiling 'e' */}
        <g transform="translate(202, 18)">
          <path
            d="M 28 26 C 28 14 18 6 6 6 C -8 6 -18 16 -18 32 C -18 48 -6 58 8 58 C 18 58 26 52 28 44 L 14 44 C 12 47 9 49 5 49 C -3 49 -7 42 -7 35 L 28 35 Z"
            fill={textColor}
          />
          {/* Eyes inside 'e' loop */}
          <circle cx="2" cy="22" r="2.8" fill="#FFFDF9" />
          <circle cx="14" cy="22" r="2.8" fill="#FFFDF9" />
          {/* Smile mouth curve */}
          <path
            d="M 2 28 Q 8 33 14 28"
            stroke="#FFFDF9"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Second Smiling 'e' */}
        <g transform="translate(254, 18)">
          <path
            d="M 28 26 C 28 14 18 6 6 6 C -8 6 -18 16 -18 32 C -18 48 -6 58 8 58 C 18 58 26 52 28 44 L 14 44 C 12 47 9 49 5 49 C -3 49 -7 42 -7 35 L 28 35 Z"
            fill={textColor}
          />
          {/* Eyes inside 'e' loop */}
          <circle cx="2" cy="22" r="2.8" fill="#FFFDF9" />
          <circle cx="14" cy="22" r="2.8" fill="#FFFDF9" />
          {/* Smile mouth curve */}
          <path
            d="M 2 28 Q 8 33 14 28"
            stroke="#FFFDF9"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 'd' letter */}
        <text
          x="300"
          y="65"
          fill={textColor}
          fontSize="68"
          fontWeight="900"
          fontFamily="'Nunito', 'Plus Jakarta Sans', sans-serif"
          letterSpacing="-1.5"
        >
          d
        </text>

        {/* Accent dot above logo */}
        <circle cx="360" cy="25" r="5" fill={accentColor} />
      </svg>
    </div>
  );
};
