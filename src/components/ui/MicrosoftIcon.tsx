import React from 'react';

interface MicrosoftIconProps {
  size?: number;
  className?: string;
}

export const MicrosoftIcon: React.FC<MicrosoftIconProps> = ({ 
  size = 20, 
  className = '' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      className={className}
      style={{ display: 'inline-block' }}
    >
      {/* Microsoft logo - four colored squares */}
      <rect x="1" y="1" width="8" height="8" fill="#F25022" />
      <rect x="11" y="1" width="8" height="8" fill="#7FBA00" />
      <rect x="1" y="11" width="8" height="8" fill="#00A4EF" />
      <rect x="11" y="11" width="8" height="8" fill="#FFB900" />
    </svg>
  );
};
