import React from 'react';
import logoImage from '../assets/images/logo_transparent.png';

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
    <img 
      src={logoImage} 
      alt="DSAfeed Logo" 
      className={`inline-block select-none object-contain ${className}`}
    />
  );
};
